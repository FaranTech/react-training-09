import React, { useState } from "react";
import "./Expense.css";
import ExpenseItems from "./ExpenseItems.js";
import Card from "../UI/Card.js";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

function Expense(props) {
  const [enteredFilter, setEnteredFilter] = useState("2020");
  const filterChangeHandler = (selecetedYear) => {
    // dropdown state change handler
    setEnteredFilter(selecetedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return enteredFilter === expense.date.getFullYear().toString();
  });
  return (
    <Card className="expenses">
      <ExpenseFilter
        seleted={enteredFilter}
        onFilterChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      {
        /* used terniany expression, there are also another ways like abusive and in variable (see section 5, video 66 )*/
        filteredExpenses.length === 0 ? (
          <p>No Data Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItems
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )
      }

      {/* <ExpenseItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItems> */}
    </Card>
  );
}
export default Expense;
