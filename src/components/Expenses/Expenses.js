import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filtredYear, setFiltredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filtredYear}
          onFilterChange={filterChangeHandler}
        />
        {expenses
          .filter((item) => item.date.getFullYear().toString() === filtredYear)
          .map((item) => (
            <ExpenseItem
              key={item.id}
              date={item.date}
              amount={item.amount}
              title={item.title}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
