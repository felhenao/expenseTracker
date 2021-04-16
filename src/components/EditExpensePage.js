import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export const EditExpensePage = (props) => (
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h3 className="page-header__title">Edit Expense</h3>
                </div>
            </div>
            <div className="content-container">
                <ExpenseForm 
                    expense={props.expense}
                    onSubmit={(expense) => {
                        props.startEditExpense(props.expense.id, expense);
                        props.history.push('/');
                    }}
                />
                <button 
                    onClick={() => {
                        props.startRemoveExpense({ id: props.expense.id});
                        props.history.push('/');
                    }}
                    className="button button--secondary"
                >Remove</button>
            </div>
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