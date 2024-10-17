// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import {Script, console} from "forge-std/Script.sol";
import {Maxsender} from "../src/Maxsender.sol";

contract MaxsenderScript is Script {
    Maxsender public maxsender;

    function setUp() public {}

    function run() public {
        // Save Private key as variable for reusability
        uint privateKey = vm.envUint("DEV_PRIVATE_KEY");

        // start deployment...with Private Key 
        vm.startBroadcast(privateKey);

        // Log Account to console
        address account = vm.addr(privateKey);
        console.log("Deployer Account address: ", account);

        maxsender = new Maxsender();

        vm.stopBroadcast();
    }
}
