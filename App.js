import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";
let DUMMY_EXPENSE = [
  { id: "e1", title: "Dinner", amount: 3000, date: new Date(2022, 6, 2) },
  { id: "e2", title: "travelling", amount: 7000, date: new Date(2022, 6, 3) },
  { id: "e3", title: "gifts", amount: 5000, date: new Date(2022, 6, 5) },
  { id: "e4", title: "School Fee", amount: 2000, date: new Date(2022, 6, 2) },
];
function App() {
  const [expenses, updateExpenses] = useState(DUMMY_EXPENSE);
  const addExpenseHandler = (expense) => {
    const newExpenses = [expense, ...expenses];
    console.log(newExpenses);
    updateExpenses(newExpenses);
  };
  return (
    <>
      <div className="App">Expense List App</div>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </>
  );
}

export default App;
