import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ item }) {
  return (
    <div className="expenses">
      {item.map((items) => (
        <ExpenseItem
          key={items.id}
          date={items.date}
          amount={items.amount}
          title={items.title}
        />
      ))}
      {/* <ExpenseItem
        date={item.map((i) => {
          i.date;
        })}
        title={item.map((i) => {
          i.title;
        })}
        amount={item.map((i) => {
          i.amount;
        })}
      /> */}
      {/* <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount}
      />
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount}
      />
      <ExpenseItem
        date={props.item[3].date}
        title={props.item[3].title}
        amount={props.item[3].amount}
      /> */}
    </div>
  );
}

export default Expenses;
