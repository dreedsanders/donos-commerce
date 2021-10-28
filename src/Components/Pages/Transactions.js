import React from "react";
import { useSelector, useDispatch } from "react-redux";
import TransactionItem from "./TransactionItem";

export default function Transactions() {
  let dispatch = useDispatch();

  let mytransactions = useSelector((state) => state.userState.transactionItems);
  console.log(mytransactions);

  const handleDashPage = () => {
    dispatch({ type: "TRANSACTIONS", transactions: false });
  };
  return (
    <div className="transactions">
      <button onClick={handleDashPage}>Close</button>
      <div className="mypage-header">
        <h1>transactions</h1>
      </div>
      <div className="transaction-item">
        {mytransactions.map((item) => (
          <TransactionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
