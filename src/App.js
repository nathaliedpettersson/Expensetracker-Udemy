import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 94.12,
    date: new Date(2022, 6, 12),
  },

  { id: "e2", 
    title: "Västkustchips",
    amount: 25, 
    date: new Date(2023, 0, 30) },

  { id: "e3", 
    title: "Oatly", 
    amount: 35.67, 
    date: new Date(2023, 1, 10) },

  { id: "e4", 
    title: "Chocolate", 
    amount: 13.13, 
    date: new Date(2023, 1, 20) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Accepting props from NewExpense and adding it in our return
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

// Hex codes: Light Purple #AA96DA, Mint #C5FAD5, Butter #FFFFD2
