import React from 'react';
import { useState } from 'react';

const ExpenseForm = (props) => {
    const [description, setDescription] = useState({descriptions: ''});
    const [note, setNote] = useState({note: ''});
    const [amount, setAmount] = useState({amount: ''})

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
                    value={amount}
                    onChange={onAmountChange}
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