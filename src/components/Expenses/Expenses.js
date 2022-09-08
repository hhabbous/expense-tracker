import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ expenses }) => {
  const [filtredYear, setFiltredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  const filtredExpenses = expenses.filter(
    (item) => item.date.getFullYear().toString() === filtredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filtredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filtredExpenses} />
        {filtredExpenses.map((item) => (
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
