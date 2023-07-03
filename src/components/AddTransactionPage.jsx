import React, { useState } from "react";
import { connect } from "react-redux";
import { addTransaction } from "../actions";

function AddTransactionPage() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({ id: Date.now(), name, amount });
    setName("");
    setAmount(0);
  };

  return (
    <div>
      <h1>Add Transaction</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default connect(null, { addTransaction })(AddTransactionPage);
