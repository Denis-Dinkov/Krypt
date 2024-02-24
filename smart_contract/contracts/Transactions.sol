// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCounter;

    event Transfer(address from, address reciever, uint amount, string message, uint timestamp, string keyword);

    struct TransferStruct {
        address sender;
        address reciever;
        uint amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transcations;

     function addToBlockchain() public {

    }

    
     function getAllTransactions() public view returns (TransferStruct[] memory) {
        //return transactions
    }

    
     function getTransactionCount() public view returns (uint256) {
        //return transactionCount
    }
}