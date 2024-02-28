import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

import dummyData from "../utils/dummyData.js";

const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions"></div>
  );
};

export default Welcome;
