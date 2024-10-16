// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25; 

contract Maxsender {
    // Custom Error for mismatched recipients and amounts
    error MismatchedArrayLengths(uint256 recipientsLength, uint256 amountsLength);

    // Custom error for insufficient ethers
    error NotEnoughEth();

    // Custom Error for failed transfer
    error TransferFailed(address recipients, uint256 amounts);

    // Event to log each successful transfer
    event TokenSent(address indexed recipients, uint256 amounts);

    // Payable function for Ether transfer
    function sendToken (address payable [] calldata recipients, uint[] calldata amounts) external payable {
        // Check if recipient length and amount length are the same 
        if (recipients.length != amounts.length) {
            revert MismatchedArrayLengths(recipients.length, amounts.length);
        }

        // Calculate the total amount to be sent
        uint totalAmount = 0;
        for (uint i = 0; i < amounts.length; i++) {
            totalAmount += amounts[i];
        }

        // Ensure the sent amount is equal or greater than the total amount
        if (msg.value < totalAmount) {
            revert NotEnoughEth();
        }

        // Loop through recipients array to match recipients to amounts
        for (uint i = 0; i < recipients.length; i++) {
            (bool sendSuccess, ) = recipients[i].call{value: amounts[i]}("");
            if (!sendSuccess) {
                revert TransferFailed(recipients[i], amounts[i]);
            }
            
            // Emit event for each successful transfer
            emit TokenSent(recipients[i], amounts[i]);
        }

    }
}