import React from 'react';
import { shallow } from 'enzyme'; 
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push : jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
        editExpense={editExpense}
        removeExpense={removeExpense}
        expense={expenses[2]}
        history={history} 
        />)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toBeCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2]);
});

test('should handle removeExpense', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toBeCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[2].id});
});