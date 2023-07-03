import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import AddTransactionPage from "./components/AddTransactionPage";
import TransactionsPage from "./components/TransactionsPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/transactions" exact component={TransactionsPage} />
        <Route path="/add" exact component={AddTransactionPage} />
      </Routes>
    </Router>
  );
}

export default App;
