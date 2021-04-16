import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

const ExpenseForm = (props) => {
    const [description, setDescription] = useState({descriptions: props.expense ? props.expense.description : ''});
    const [note, setNote] = useState({note: props.expense ? props.expense.note : ''});
    const [amount, setAmount] = useState({amount: props.expense ? (props.expense.amount / 100).toString() : ''})
    const [createdAt, setCreatedAt] = useState({createdAt: props.expense ? moment(props.expense.createdAt) : moment()})
    const [calendarFocused, setCalendarFocused] = useState({calendarFocused: false})
    const [error, setError] = useState({error: ''})

    const onDescriptionChange = (e) => {
        const description = e.target.value;
        setDescription({ descriptions: description });
    }

    const onNoteChange = (e) => {
        const note = e.target.value;
        setNote({note});
    }

    const onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match) {
            if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/ )) {  //don't allow more than two decimal points
                setAmount({amount});
            }
        }
    }

    const onDateChange = (createdAt) => {
        if (createdAt) {
            setCreatedAt({createdAt});      //must provide value
        }
    }

    const onFocusChange = ({ focused }) => {
        setCalendarFocused({ calendarFocused: focused });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (!description.descriptions || !amount.amount) {
            setError({error: 'Please provide description and amount.'});

        } else {
            setError({error: ''});
            props.onSubmit({
                description: description.descriptions,
                amount: parseFloat(amount.amount, 10) * 100,
                createdAt: createdAt.createdAt.valueOf(),
                note: note.note
            })
        }
    }
    
    return (
        <form onSubmit={onSubmit} className="form">
        {error.error && <p className='form__error'>{error.error}</p>}
            <input
                type="text"
                placeholder="Description"
                className="text-input"
                autoFocus
                value={description.descriptions}
                onChange={onDescriptionChange}
            />

            <input
                type="text"
                placeholder="Amount"
                className="text-input"
                value={amount.amount}
                onChange={onAmountChange}
            />

            <SingleDatePicker
                date={createdAt.createdAt}
                onDateChange={onDateChange}
                focused={calendarFocused.calendarFocused}
                onFocusChange={onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false}
            />

            <textarea
                type="text"
                value={note.note}
                className="textarea"
                placeholder="Add note for your expense"
                onChange={onNoteChange}
            >
            </textarea>

            <div>
                <button className="button">Submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm;