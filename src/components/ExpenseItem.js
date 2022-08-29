import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 3, 28);
  const expenseTitle = "Car insurance";
  const expenseAmount = 294.74;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">$ {expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
