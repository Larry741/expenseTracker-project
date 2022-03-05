import ExpenseItem from "./ExpenseItem";

import "./expensesList.css";

const ExpenseList = (props) => {
  const filteredArrayExpense =
    props.expenseList.length === 0 
    ? <h2 className="expenses-list__fallback">No expense found</h2>
    : props.expenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ));

  return <ul className="expenses-list">{filteredArrayExpense}</ul>;
};

export default ExpenseList;
