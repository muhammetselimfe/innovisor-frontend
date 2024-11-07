import React from 'react';
import './LeftSidebar.css';

const LeftSidebarTop = () => {
  return (
    <div className="left-sidebar-top">
      <h2>Welcome Back!</h2>
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">Total Balance</span>
          <span className="stat-value">$0.00</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Total Transactions</span>
          <span className="stat-value">0</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebarTop;
