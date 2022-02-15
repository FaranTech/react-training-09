import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [setEditor, isSetEditor] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
    isSetEditor(false); //reset state so that 'Add New Expense' button will again be available
  };
  const startEditingHandler = () => {
    isSetEditor(true);
  };
  const stopEditingHandler = () => {
    isSetEditor(false);
  };

  return (
    <div className="new-expense">
      {!setEditor && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {setEditor && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}
export default NewExpense;
