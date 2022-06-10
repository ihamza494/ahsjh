import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [newTitle, setNewTitle] = useState("");
  const [title, setTitle] = useState(props.title);
  const changeTitle = () => {
    setTitle(newTitle);
  };
  const changeHandler = (e) => {
    setNewTitle(e.target.value);
  };
  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">Rs. {props.amount}</div>
        <input
          type="text"
          name="title"
          value={newTitle}
          onChange={changeHandler}
        />
        <button onClick={changeTitle}>Change Title</button>
      </div>
    </>
  );
};

export default ExpenseItem;
