import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export const AddExpensePage = (props) => (
    <div>
        <h3>Add Expense</h3>
        <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.addExpense(expense);
                props.history.push('/'); //redirect to dashboard
            }}
        />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
}); //return dispatcher function extracted away from the component

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

