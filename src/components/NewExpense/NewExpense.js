import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onNewExpense }) => {
    const expenseFormChangeHandler = (currentExpense) => {
        const expense = {
            ...currentExpense,
            id: Math.random().toString(),
        };

        onNewExpense(expense);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onExpenseFormChange={expenseFormChangeHandler} />
        </div>
    );
};

export default NewExpense;
