import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


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
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {  //don't allow more than two decimal points
            setAmount({amount});
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
        <div>
            {error.error && <p>{error.error}</p>}
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Description"
                    autoFocus
                    value={description.descriptions}
                    onChange={onDescriptionChange}
                />

                <input
                    type="number"
                    placeholder="Amount"
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
                    placeholder="Add note for your expense"
                    onChange={onNoteChange}
                >
                </textarea>
                <button>Add Exspense</button>
            </form>
        </div>
    )
}

export default ExpenseForm;