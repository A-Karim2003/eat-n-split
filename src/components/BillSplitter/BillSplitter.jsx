import InputGroup from "./InputGroup";
import Button from "../Button";

import "./billSplitter.css";
import { useState } from "react";

function BillSplitter({ selectedPerson, onHandleFriends, selectedPersonId }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const [billPayer, setbillPayer] = useState("");

  function handleMyExpense(e) {
    const expense = Number(e.target.value);
    const billInput = Number(bill);

    if (expense > billInput) return alert("Expense cannot exceed bill");

    setMyExpense(e.target.value);
  }

  function handleBillPayer(e) {
    setbillPayer(e.target.value);
  }

  function handleFriendsExpence() {
    if (Number(bill) === 0) return "";
    return Number(bill) - Number(myExpense);
  }

  //!-------------------------------//
  // function calcAmount() {
  //   const friendExpence = handleFriendsExpence;
  //   if (billPayer === "me") {
  //   }
  // }

  if (!selectedPerson) return;

  return (
    <div className="bill-splitter-container">
      <h2>Split a bill with {selectedPerson.name}</h2>

      {/* ----------Bill Value---------- */}
      <InputGroup>
        <div>💵 Bill value</div>
        <input type="number" onChange={(e) => setBill(e.target.value)} />
      </InputGroup>

      {/* -----------My Expense---------- */}
      <InputGroup>
        <div>👨🏽‍💼 Your Expense</div>
        <input type="number" onChange={handleMyExpense} value={myExpense} />
      </InputGroup>

      {/* --------Friend's value--------- */}
      <InputGroup>
        <div>👫 {selectedPerson.name}'s expense</div>
        <input type="number" disabled value={handleFriendsExpence()} />
      </InputGroup>

      {/* ----------Bill payer----------- */}
      <InputGroup>
        <label htmlFor="bill-payer">🪙 Who is paying the bill</label>
        <select id="bill-payer" onChange={handleBillPayer}>
          <option value="me">You</option>
          <option value="friend">{selectedPerson.name}</option>
        </select>
      </InputGroup>

      <Button
        onClick={() => onHandleFriends(selectedPersonId, calcAmount())}
        className={"split-bill-btn"}
      >
        Split bill
      </Button>
    </div>
  );
}

export default BillSplitter;
