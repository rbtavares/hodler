// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Hodler} from "../src/Hodler.sol";

contract HodlerTest is Test {
    Hodler public hodler;

    function setUp() public {
        hodler = new Hodler();
    }
}
