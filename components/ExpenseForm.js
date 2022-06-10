import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expDate, setDate] = useState("");

  const saveExpenseDataHAndler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    console.log(expenseData);
  };

  const changeExpEH = (e) => {
    setExpense(e.target.value);
  };
  const changeAmtEH = (e) => {
    setAmount(e.target.value);
  };
  const changedateEH = (e) => {
    setDate(e.target.value);
  };
  const addCard = (e) => {
    e.preventDefault();
    const expenseData = {
      title: expense,
      amount: amount,
      date: new Date(expDate),
    };
    console.log(expenseData);
    //props.onAddExpense(expenseData);
    saveExpenseDataHAndler(expenseData);
    setExpense("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="expense-form">
      <form onSubmit={addCard}>
        <label>Expense: </label>
        <input
          type="text"
          name="expense"
          value={expense}
          onChange={changeExpEH}
        ></input>
        <label>Amount: </label>
        <input
          type="number"
          name="amount"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={changeAmtEH}
        ></input>
        <label>Date: </label>
        <input
          type="Date"
          name="date"
          value={expDate}
          onChange={changedateEH}
        ></input>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default ExpenseForm;
