import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";
const DUMMYEXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 5, 21),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 5, 21) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 5, 21),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 21),
  },
];

function App() {
  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "Toilet Paper",
  //     amount: 94.12,
  //     date: new Date(2021, 5, 21),
  //   },
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 5, 21) },
  //   {
  //     id: "e3",
  //     title: "Car Insurance",
  //     amount: 294.67,
  //     date: new Date(2021, 5, 21),
  //   },
  //   {
  //     id: "e4",
  //     title: "New Desk (Wooden)",
  //     amount: 450,
  //     date: new Date(2021, 5, 21),
  //   },
  // ];
  // const addExpenseHandler = (expense) => {
  //   console.log("App.js");
  //   console.log(expense);
  // };
  const [expenses, setExpence] = useState(DUMMYEXPENSE);
  const addExpenseHandler = (expenses) => {
    setExpence((prevExpense) => {
      return [expenses, ...prevExpense];
      // console.log("App.js");
      // console.log(expense);
    });
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <h2>Yo!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
