import React from 'react';
import './TransactionHistory.css';
import useStore from '../../store/appStore';

const TransactionHistory = () => {
  const transactions = useStore((state) => state.transactions);

  return (
    <div className="transaction-container">
      <h1>Transaction History</h1>
      <div className="transaction-content">
        <div className="transaction-list">
          {transactions?.map((transaction, index) => (
            <div key={index} className="transaction-item">
              <span className="date">{transaction.date}</span>
              <span className="type">{transaction.type}</span>
              <span className="amount">{transaction.amount}</span>
              <span className={`status ${transaction.status.toLowerCase()}`}>
                {transaction.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
