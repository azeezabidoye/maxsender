// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract Multisend {

    // Payable function to allow Ether transfer
    function sendToken(address payable[] calldata recipients, uint[] calldata amounts) external payable {
        // Check if Recipients and Amounts length are the same
        require(recipients.length == amounts.length, "Recipients and amounts length must be the same");

        // Calculate the total amount to be sent
        uint totalAmount = 0;
        for (uint i = 0; i < amounts.length; i++) {
            totalAmount += amounts[i];
        }
        
        // Ensure the sent value is equal or greater than the total amount
        require(msg.value >= totalAmount, "Not enough Ether sent");

        // Loop through recipients array to match recipients to amounts
        for(uint i = 0; i < recipients.length; i++) {
            (bool sendSuccess, ) = recipients[i].call{value: amounts[i]}("");
            require(sendSuccess, "Sending failed");
        }
    }
}
