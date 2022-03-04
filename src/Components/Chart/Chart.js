import ChartBar from './ChartBar';

import './Chart.css';

const Chart = props => {
  const reducedExpenses = props.expenseList.map((expense) => expense.value);
  const maxValue = Math.max(...reducedExpenses);
  
  return (
    <div className="chart">
      {props.expenseList.map((expense) => (
        <ChartBar
          key={expense.label}
          value={expense.value}
          maxValue={maxValue}
          label={expense.label}
        />
      ))}
    </div>
  );
}

export default Chart;