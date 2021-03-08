import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[2]} />);
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.find('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0)
    .simulate('change', {
        target: {  value: 'yuns' }
    });
    expect(wrapper.find('input').at(0).prop('value')).toBe('yuns');
})

test('should set description on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea')
    .simulate('change', {
        target: {  value: 'Hi' }
    });
    expect(wrapper.find('textarea').prop('value')).toBe('Hi');
})




