import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onFormSubmit(expenseData);
  }
  
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense