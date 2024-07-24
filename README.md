# HODLER

## What is HODLER

HODLER is a full-stack decentralized application for holding funds on the EVM, allowing you store funds for a set period of time without the possibility of withdrawing them before the specified time goal is met.

## How is HODLER built

HODLER's backend is only made up of Solidity smart contracts and during the development process Foundry was used to speed up writting and testing said contracts.
The contracts' source code can be found at [/foundry/src/](/foundry/src/) and the code for the Foundry tests can be found at [/foundry/test/](/foundry/test/).

None of these smart contracts were deployed by me on any chain and were only used and tested in development environments.

The front-end for the application consists of a React app with the Wagmi hooks, which allows for a dynamic and continuous communication with the blockchain. Properties for the chain being used can be changed in the configuration files, more information will be available later.

## How to test HODLER

Backend deployment:

1. Launch a local blockchain.
2. Deploy the HODLER smart contract located at [foundry/src/Hodler.sol](/foundry/src/Hodler.sol).

If you are using Foundry:

1. Launch the local blockchain by running `anvil`.
2. Deploy the HOLDER smart contract by running `forge create --rpc-url <CHAIN_URL> --private-key <DEPLOYER_PKEY> foundry/src/Hodler.sol:Hodler`.
     - The field `CHAIN_URL` will be obtained in the previous step and `DEPLOYER_PKEY` is the deployer's private key.

Frontend deployment:

1. Deploy the React app by changing into the webapp directory with `cd webapp` and running `npm i`. Then, run `npm run start` and open the URL for the deployed web application on your browser.
