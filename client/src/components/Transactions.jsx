import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";
import dummyData from "../utils/dummyData.js";

import { shortenAddress } from "../utils/shortenAdress.js";
import useFetch from "../hooks/useFetch.jsx";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  keyword,
  amount,
  url,
}) => {
  const gifUrl = useFetch({ keyword });

  return (
    <div
      className="bg-[#181918] m-4 flex flex-1
        2xl:min-w-[450px]
        2xl:max-w-[500px]
        sm:min-w-[270x]
        sm:max-w-[300px]
        flex-col p-3 rounded-md hover:shadow-2xl
        "
    >
      <a
        href={`https://sepolia.etherscan.io/address/${addressFrom}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center w-full mt-3"
      >
        <div className="w-full mb-6 p-2">
          <div>
            <p className="text-white text-base">
              From: {shortenAddress(addressFrom)}
            </p>
          </div>
          <div>
            <p className="text-white text-base">
              To: {shortenAddress(addressTo)}
            </p>
            {message && (
              <>
                <br />
                <p className="text-white text-base">Message: {message}</p>
              </>
            )}
          </div>
          <p className="text-white text-base">Amount: ${amount} ETH</p>
        </div>
        <img
          src={gifUrl || url}
          alt="gif"
          className="w-full h-64 2x:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </a>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  const reversedTransactions = [...transactions].reverse();
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see your transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {reversedTransactions.length === 0 ? (
            [
              reversedTransactions.map((transaction, index) => (
                <TransactionCard key={index} {...transaction} />
              )),
            ]
          ) : (
            <h3>
              <p className="text-white text-2xl text-center my-2">
                No transactions found
              </p>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
