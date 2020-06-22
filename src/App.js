import React from 'react';
import './App.css';
import Main from './main';
import {TransactionProvider} from './expenseContext';

function App() {
  return (
    <TransactionProvider>
      <Main />
    </TransactionProvider>
  );
}

export default App;
