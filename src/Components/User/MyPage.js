import React from "react";
import Dashboard from "../Pages/Dashboard";
import Transactions from "../Pages/Transactions";
import { useSelector } from "react-redux";

export default function MyPage(props) {

  let transactions = useSelector((state) => state.userState.transactions)
  
  return (
    <div>
      {transactions ? <Transactions /> : <Dashboard />}
    </div>
  );
}
