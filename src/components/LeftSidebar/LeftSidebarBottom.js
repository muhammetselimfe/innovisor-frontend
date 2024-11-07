import React from 'react';
import './LeftSidebar.css';
import FearGreedIndex from '../FearGreedIndex/FearGreedIndex';
import AgentStatus from './AgentStatus';

const LeftSidebarBottom = () => {
  return (
    <div className="left-sidebar-bottom">
      <AgentStatus />
      <FearGreedIndex />
    </div>
  );
};

export default LeftSidebarBottom;
