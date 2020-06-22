import React, { useContext, useState } from 'react';
import { expenseContext } from './expenseContext';


function Main() {
    let { transactions, addTransaction } = useContext(expenseContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(newAmount) === 0) {
            alert("Please enter correct amount!");
            return false;
        }
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        });
        

        setDesc('');
        setAmount(0)
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount > 0)
                income = income + transactions[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }

    return (
        <div className="container">
            
            <h1 className="center"><img src="logo.png" alt="this is logo"/>&nbsp;Expense Tracker</h1><hr/>

            <h2>Your Balance <br /> PKR: {getIncome() + getExpense()}</h2>

            <div className="value">
                <h3 className="green">INCOME <br /> PKR: {getIncome()}</h3>
                <h3 className="red">EXPENSE <br /> PKR: {getExpense()}</h3>
            </div>

            <h3>History</h3><hr />

            <ul className="transaction">
                {transactions.map((expObj, ind) => {
                    return (<li key={ind}>
                        <span>{expObj.desc}</span>
                        <span>PKR{Math.abs(expObj.amount)}</span>
                    </li>
                    )
                })}
            </ul>

            <h4>Add New Transaction</h4><hr />

            <form className="form" onSubmit={handleAddition}>
                <label>
                    Enter Your Description <br />
                    <input type="text"
                        value={newDesc}
                        placeholder="Text"
                        onChange={(ev) => setDesc(ev.target.value)}
                        required />
                </label>

                <br />
                <label>
                    Enter Your Amount <br />
                    <input type="number"
                        value={newAmount}
                        placeholder="Amount"
                        onChange={(ev) => setAmount(ev.target.value)}
                        required />
                </label>
                <br />
                <input type="submit" value="Submit Transaction" />
            </form>
        </div>
    );
}

export default Main;
