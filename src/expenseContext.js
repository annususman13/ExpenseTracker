import React, { createContext, useReducer } from "react";
import expenseReducer from './expenseReducer';

const initialTransactions = []

export const expenseContext = createContext(initialTransactions);

export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(expenseReducer, initialTransactions);

    function addTransaction(expObj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: { 
                amount: expObj.amount,
                desc: expObj.desc 
            },
        })
    }
    function delTransaction(id){
        dispatch({
            type: "DEL_TRANSACTION",
            payload: id
        })
    }

    return(
        <expenseContext.Provider value={{
            transactions: state,
            addTransaction,
            delTransaction
        }}>
            {children}
        </expenseContext.Provider>
    )
}