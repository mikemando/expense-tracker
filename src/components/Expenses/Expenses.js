import React, { useState } from "react";
import "./expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    const filterChangeHandler = (event) => {
        setFilteredYear(event);
    };
    let filteredExpenses = expenses.filter(
        (expense) => expense.date.getFullYear().toString() === filteredYear
    );

    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList filteredExpenses={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
