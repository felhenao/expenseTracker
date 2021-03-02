import React from 'react';
import { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


const ExpenseForm = (props) => {
    const [description, setDescription] = useState({descriptions: ''});
    const [note, setNote] = useState({note: ''});
    const [amount, setAmount] = useState({amount: ''})
    const [createdAt, setCreatedAt] = useState({createdAt: moment()})
    const [calendarFocused, setCalendarFocused] = useState({calendarFocused: false})

    const onDescriptionChange = (e) => {
        const description = e.target.value;
        setDescription(description);
    }

    const onNoteChange = (e) => {
        const note = e.target.value;
        setNote(note);
    }

    const onAmountChange = (e) => {
        const amount = e.target.value;
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {  //don't allow more than two decimal points
            setAmount(amount);
        }
    }

    const onDateChange = (createdAt) => {
        setCreatedAt({createdAt});
    }

    const onFocusChange = ({ focused }) => {
        setCalendarFocused({ calendarFocused: focused });
    }
    
    return (
        <div>
            <form>
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
                    placeholder={description.description}
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