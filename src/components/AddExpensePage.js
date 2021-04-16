import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export const AddExpensePage = (props) => (
    <div>
        <div className="page-header">
            <div className="page-container">
                <h3 className="page-header__title">Add Expense</h3>
            </div>
        </div>
        
        <div className="content-container">
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.startAddExpense(expense);
                    props.history.push('/'); //redirect to dashboard
                }}
            />
        </div>

    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
}); //return dispatcher function extracted away from the component

export default connect(undefined, mapDispatchToProps)(AddExpensePage);

