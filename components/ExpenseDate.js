import React from "react";
import "./Expensedate.css";

function ExpenseDate(props) {
  let month = props.date.toLocaleString("en-US", { month: "long" });
  let year = props.date.getFullYear();
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div>
      <p>
        {day}, {month}, {year}
      </p>
    </div>
  );
}
export default ExpenseDate;
