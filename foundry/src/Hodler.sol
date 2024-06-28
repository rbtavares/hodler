// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Hodler {

    // Deposit struct
    struct Deposit {
        uint256 amount;
        uint256 unlockTime;
    }

    // Mapping from user address to their array of deposits
    mapping(address => Deposit[]) public deposits;

    // Events to log deposits and withdrawals
    event Deposited(address indexed user, uint256 amount, uint256 unlockTime);
    event Withdrawn(address indexed user, uint256 amount);

    // Function to deposit Ether with a specified unlock time
    function deposit(uint256 _timeInSeconds) external payable {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        require(_timeInSeconds > 0, "Unlock time must be in the future");
        require(_timeInSeconds < 60 * 60 * 24 * 365 * 2, "Unlock time must be lower than 2 years");

        uint256 unlockTime = block.timestamp + _timeInSeconds;

        deposits[msg.sender].push(Deposit(msg.value, unlockTime));

        emit Deposited(msg.sender, msg.value, unlockTime);
    }

    // Function to withdraw Ether from a specific deposit
    function withdraw(uint256 _index) external {
        require(_index < deposits[msg.sender].length, "Invalid deposit index");

        Deposit storage userDeposit = deposits[msg.sender][_index];

        require(block.timestamp >= userDeposit.unlockTime, "Unlock time not reached");
        require(userDeposit.amount > 0, "No funds to withdraw from this deposit");

        uint256 amount = userDeposit.amount;

        deposits[msg.sender][_index] = deposits[msg.sender][deposits[msg.sender].length - 1];
        deposits[msg.sender].pop();

        payable(msg.sender).transfer(amount);

        emit Withdrawn(msg.sender, amount);
    }

    // Function to get the details of a specific deposit
    function getDepositDetails(address _user, uint256 _index) external view returns (uint256 amount, uint256 unlockTime) {
        require(_index < deposits[_user].length, "Invalid deposit index");
        Deposit memory userDeposit = deposits[_user][_index];
        return (userDeposit.amount, userDeposit.unlockTime);
    }

    // Function to get the count of deposits for a user
    function getDepositCount(address _user) external view returns (uint256) {
        return deposits[_user].length;
    }
}
