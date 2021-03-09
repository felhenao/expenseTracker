import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.onSubmit(expense);
                props.history.push('/'); //redirect to dashboard
            }}
        />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
}); //return dispatcher function extracted away from the component

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

