import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { SingleDatePicker } from 'react-dates';

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
    expect(wrapper.find('h3').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0)
    .simulate('change', {
        target: { value: 'yuns' }
    });
    expect(wrapper.find('input').at(0).prop('value')).toBe('yuns');
})

test('should set description on textarea change', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea')
    .simulate('change', {
        target: { value: 'Hi' }
    });
    expect(wrapper.find('textarea').prop('value')).toBe('Hi');
})

test('should set amount if valid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1)
    .simulate('change', {
        target: { value: '22' }
    });
    expect(wrapper.find('input').at(1).prop('value')).toBe('22');
})

test('should set amount if invalid input', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1)
    .simulate('change', {
        target: { value: '22.144' }
    });
    expect(wrapper.find('input').at(1).prop('value')).toBe('');
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.find('h3').length).toBeGreaterThan(0)
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('should set new date on date change', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);
    expect(wrapper.find(SingleDatePicker).prop('date')).toEqual(now);
})

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
    expect(wrapper.find(SingleDatePicker).prop('focused')).toBe(focused)
})

