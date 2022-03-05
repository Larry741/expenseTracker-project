import ExpenseList from './expensesList';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import Chart from '../Chart/Chart';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021'); 

	const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredArray = props.expenseData.filter((el) =>
    el.date.getFullYear().toString() === filteredYear
  );

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // const onSubmitUpdate = (enteredDate) => {
  //   setFilteredYear(enteredDate);
  // }
  for (const expense of filteredArray) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount; 
  }

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onYearChange={filterChangeHandler}
      />
      <Chart expenseList={chartDataPoints} />
      <ExpenseList expenseList={filteredArray} />
    </Card>
  );
}

export default Expenses;