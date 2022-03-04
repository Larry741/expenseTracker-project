import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

let dateString = "";

function App() {
  const expenseArray = [
    {
      id: "e1",
      date: new Date("2019, 3, 4"),
      title: "car insurance",
      amount: "500",
    },
    {
      id: "e2",
      date: new Date("2020, 3, 12"),
      title: "car insurance",
      amount: "500",
    },
    {
      id: "e3",
      date: new Date("2021, 8, 8"),
      title: "car insurance",
      amount: "500",
    },
    {
      id: "e4",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 10),
    },
    {
      id: "e5",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 8),
    },
    {
      id: "e6",
      title: "Car Insurance",
      amount: 295.85,
      date: new Date(2021, 8, 16),
    },
    {
      id: "e7",
      title: "Groceries",
      amount: 102.75,
      date: new Date(2021, 9, 11),
    },
  ];

  const [expenses, setExpenses] = useState(expenseArray);

  const expenseDataHandler = (expenseData) => {
    dateString = expenseData.date.getFullYear().toString();
    setExpenses((prevState) => {
      return [expenseData, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onFormSubmit={expenseDataHandler} />
      <Expenses expenseData={expenses} />
    </div>
  );
}

export default App;
