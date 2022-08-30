import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <div className="expenses">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          date={item.date}
          amount={item.amount}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Expenses;
