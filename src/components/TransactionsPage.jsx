import React from "react";
import { connect } from "react-redux";
import { deleteTransaction } from "../actions";

// are prop types needed for map to work?
function TransactionsPage({ transactions }) {
  return (
    <div>
      <h1>Transactions Page</h1>
      <ul>
        {/* This will show all the transactions */}
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <h3>{transaction.name}</h3>: <span>{transaction.amount}</span>
            <button onClick={() => deleteTransaction(transaction.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

export default connect(mapStateToProps, { deleteTransaction })(
  TransactionsPage
);
