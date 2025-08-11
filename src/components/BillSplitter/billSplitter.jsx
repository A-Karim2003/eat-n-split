import InputGroup from "./InputGroup";
import Button from "../Button";

import "./billSplitter.css";

function BillSplitter() {
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

      {/* --------Friend's valie--------- */}
      <InputGroup>
        <div>👫 Clark's expense</div>
        <input type="number" />
      </InputGroup>

      {/* --------Bill payer--------- */}
      <InputGroup>
        <div>🪙 Who is paying the bill</div>
        <input type="number" />
      </InputGroup>

      <Button className={"split-bill-btn"}>Split bill</Button>
    </div>
  );
}

export default BillSplitter;
