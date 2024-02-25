import { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { etherium } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(etherium);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
  return (
    <TransactionContext.Provider value={{ value: "test" }}>
      {children}
    </TransactionContext.Provider>
  );
};
