import React from 'react';
import './LeftSidebar.css';

const AgentStatus = () => {
  return (
    <div className="agent-status">
      <h3>AI Assistant</h3>
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">Current Agent</span>
          <span className="stat-value">Claude 3</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Credits Remaining</span>
          <span className="stat-value">500</span>
        </div>
      </div>
    </div>
  );
};

export default AgentStatus;
