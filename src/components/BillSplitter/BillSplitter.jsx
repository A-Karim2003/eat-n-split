import InputGroup from "./InputGroup";
import Button from "../Button";

import "./billSplitter.css";

function BillSplitter({ selectedPerson }) {
  console.log(selectedPerson);

  if (!selectedPerson) return;
  return (
    <div className="bill-splitter-container">
      <h2>Split a bill with Clark</h2>

      {/* --------Bill Value--------- */}
      <InputGroup>
        <div>💵 Bill value</div>
        <input type="number" />
      </InputGroup>

      {/* --------Your Expense--------- */}
      <InputGroup>
        <div>👨🏽‍💼 Your Expense</div>
        <input type="number" />
      </InputGroup>

      {/* --------Friend's value--------- */}
      <InputGroup>
        <div>👫 Clark's expense</div>
        <input type="number" disabled />
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
