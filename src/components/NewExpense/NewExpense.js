import React from "react";
import ExpenseForm from "./ExpenseForm";
import '../style/NewExpense.css';

const NewExpense = (props) => {
  // Declaring a function to get props from ExpenseForm  
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        // Sending props to App.js
        props.onAddExpense(expenseData);
    };

    // Call for our saveExpenseDataHandler inside our <ExpenseForm />
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
};

export default NewExpense;