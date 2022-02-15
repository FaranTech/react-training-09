//import React, { useState } from "react";
import "./ExpenseItems.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card.js";
function ExpenseItems(props) {
  //const [title, setTitle] = useState(props.title); to update title with button

  // const update = () => { to update title with button
  //   setTitle("Updated...");
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        {/* <h2>{title}</h2>  to update title with button */}
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
        {/* <button onClick={update}>Title Update</button> to update title with button */}
        <button>Title Update</button>
      </div>
    </Card>
  );
}
export default ExpenseItems;
