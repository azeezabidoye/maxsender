// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Maxsender} from "../src/Maxsender.sol";

contract MaxsenderScript is Script {
    Maxsender public maxsender;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        maxsender = new Maxsender();

        vm.stopBroadcast();
    }
}
