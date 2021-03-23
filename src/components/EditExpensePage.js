import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export const EditExpensePage = (props) => (
        <div>
        <h3>Edit Expense</h3>
            <ExpenseForm 
                expense={props.expense}
                onSubmit={(expense) => {
                    props.startEditExpense(props.expense.id, expense);
                    props.history.push('/');
                }}
            />
            <button onClick={() => {
                props.startRemoveExpense({ id: props.expense.id});
                props.history.push('/');
            }}>Remove</button>
        </div>
    );
                
const mapStateToProps = (state, ownProps) => ({
        expense: state.expenses.find((expense) => expense.id === ownProps.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);