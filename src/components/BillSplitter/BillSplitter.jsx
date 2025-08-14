import InputGroup from "./InputGroup";
import Button from "../Button";

import "./billSplitter.css";
import { useState } from "react";

function BillSplitter({ selectedPerson }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");

  function handleMyExpense(e) {
    if (e.target.value === "") {
      setMyExpense("");
      return;
    }

    const expense = Number(e.target.value);
    if (expense > bill) return;

    setMyExpense(expense);
  }

  if (!selectedPerson) return;

  return (
    <div className="bill-splitter-container">
      <h2>Split a bill with {selectedPerson.name}</h2>

      {/* --------Bill Value--------- */}
      <InputGroup>
        <div>💵 Bill value</div>
        <input
          type="number"
          onChange={(e) => setBill(Number(e.target.value))}
        />
      </InputGroup>

      {/* -----------My Expense---------- */}
      <InputGroup>
        <div>👨🏽‍💼 Your Expense</div>
        <input
          type="number"
          onChange={(e) => handleMyExpense(e)}
          value={myExpense}
        />
      </InputGroup>

      {/* --------Friend's value--------- */}
      <InputGroup>
        <div>👫 {selectedPerson.name}'s expense</div>
        <input type="number" disabled value={bill} />
      </InputGroup>

      {/* --------Bill payer--------- */}
      <InputGroup>
        <label htmlFor="bill-payer">🪙 Who is paying the bill</label>
        <select id="bill-payer">
          <option value="">You</option>
          <option value="">Clark</option>
        </select>
      </InputGroup>

      <Button className={"split-bill-btn"}>Split bill</Button>
    </div>
  );
}

export default BillSplitter;

//! Keep bill and expense state as strings and only convert them into Number when math is required
