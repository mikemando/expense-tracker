import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ filteredExpenses }) => {
    if (filteredExpenses.length === 0) {
        return (
            <h2 className="expenses-list expenses-list__fallback">
                No Expense Found
            </h2>
        );
    }

    return filteredExpenses.map((expense) => (
        <ul>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        </ul>
    ));
};

export default ExpenseList;
