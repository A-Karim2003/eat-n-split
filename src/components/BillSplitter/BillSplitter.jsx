import InputGroup from "./InputGroup";
import Button from "../Button";

import "./billSplitter.css";
import { use, useState } from "react";

function BillSplitter({ selectedPerson }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");

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
          onChange={(e) => setMyExpense(Number(e.target.value))}
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
