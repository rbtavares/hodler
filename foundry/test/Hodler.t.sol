// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Hodler} from "../src/Hodler.sol";

contract HodlerTest is Test {

    Hodler hodler;
    address user = address(0x123);
    address payable userPayable = payable(user);

    event Deposited(address indexed user, uint256 amount, uint256 unlockTime);
    event Withdrawn(address indexed user, uint256 amount);

    function setUp() public {
        hodler = new Hodler();
        vm.deal(user, 10 ether);
    }

    function testDeposit() public {
        vm.startPrank(user);

        uint256 depositAmount = 1 ether;
        uint256 unlockTime = 3600; // 1 hour

        vm.expectEmit(true, true, true, true);
        emit Deposited(user, depositAmount, block.timestamp + unlockTime);

        hodler.deposit{value: depositAmount}(unlockTime);

        (uint256 amount, uint256 unlockTimeFromContract) = hodler.getDepositDetails(user, 0);

        assertEq(amount, depositAmount);
        assertEq(unlockTimeFromContract, block.timestamp + unlockTime);

        vm.stopPrank();
    }

    function testWithdraw() public {
        vm.startPrank(user);

        uint256 depositAmount = 1 ether;
        uint256 unlockTime = 2 hours;

        hodler.deposit{value: depositAmount}(unlockTime);

        vm.warp(block.timestamp + unlockTime + 1);

        vm.expectEmit(true, true, true, true);
        emit Withdrawn(user, depositAmount);

        uint256 initialBalance = userPayable.balance;
        
        hodler.withdraw(0);

        uint256 finalBalance = userPayable.balance;
        assertEq(finalBalance, initialBalance + depositAmount);

        vm.stopPrank();
    }

    function testGetDepositDetails() public {
        vm.startPrank(user);

        uint256 depositAmount = 1 ether;
        uint256 unlockTime = 3600; // 1 hour

        hodler.deposit{value: depositAmount}(unlockTime);

        (uint256 amount, uint256 unlockTimeFromContract) = hodler.getDepositDetails(user, 0);

        assertEq(amount, depositAmount);
        assertEq(unlockTimeFromContract, block.timestamp + unlockTime);

        vm.stopPrank();
    }

    function testGetDepositCount() public {
        vm.startPrank(user);

        uint256 depositAmount1 = 1 ether;
        uint256 unlockTime1 = 3600; // 1 hour

        uint256 depositAmount2 = 2 ether;
        uint256 unlockTime2 = 7200; // 2 hours

        hodler.deposit{value: depositAmount1}(unlockTime1);
        hodler.deposit{value: depositAmount2}(unlockTime2);

        uint256 depositCount = hodler.getDepositCount(user);

        assertEq(depositCount, 2);

        vm.stopPrank();
    }

    function testWithdrawBeforeUnlockFails() public {
        vm.startPrank(user);

        uint256 depositAmount = 1 ether;
        uint256 unlockTime = 2 hours;

        hodler.deposit{value: depositAmount}(unlockTime);

        vm.expectRevert("Unlock time not reached");
        hodler.withdraw(0);

        vm.stopPrank();
    }

    function testWithdrawInvalidIndexFails() public {
        vm.startPrank(user);

        uint256 depositAmount = 1 ether;
        uint256 unlockTime = 2 hours;

        hodler.deposit{value: depositAmount}(unlockTime);

        vm.warp(block.timestamp + unlockTime + 1);

        vm.expectRevert("Invalid deposit index");
        hodler.withdraw(1);

        vm.stopPrank();
    }

    function testDepositWithZeroValueFails() public {
        vm.startPrank(user);

        vm.expectRevert("Deposit amount must be greater than 0");
        hodler.deposit{value: 0}(3600);

        vm.stopPrank();
    }

    function testDepositWithZeroUnlockTimeFails() public {
        vm.startPrank(user);

        vm.expectRevert("Unlock time must be in the future");
        hodler.deposit{value: 1 ether}(0);

        vm.stopPrank();
    }

    function testDepositWithExcessiveUnlockTimeFails() public {
        vm.startPrank(user);

        uint256 excessiveTime = 60 * 60 * 24 * 365 * 2 + 1;

        vm.expectRevert("Unlock time must be lower than 2 years");
        hodler.deposit{value: 1 ether}(excessiveTime);

        vm.stopPrank();
    }
}
