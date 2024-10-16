// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import {Test, console} from "forge-std/Test.sol";
import {Maxsender} from "../src/Maxsender.sol";

contract MaxsenderTest is Test {
    Maxsender public maxsender;

    function setUp() public {
        // Deploy the contract before each test
        maxsender = new Maxsender();
    }

    function test_sendToken() public {
        address payable[] memory recipients = new address payable[](2);
        uint[] memory amounts = new uint[](2);
        recipients[0] = payable(0x6c5fa1b41990f4ee402984Bcc8Bf6F4CB769fE74);
        recipients[1] = payable(0x55829bC84132E1449b62607B1c7bbC012f0326Ac);
        amounts[0] = 100;   //wei
        amounts[1] = 200;   //wei
        maxsender.sendToken{value: 300}(recipients, amounts);
        assertEq(address(recipients[0]).balance, amounts[0]);
        assertEq(address(recipients[1]).balance, amounts[1]);
    }

}
