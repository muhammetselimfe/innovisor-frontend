import React from 'react';
import './Marketplace.css';
import useStore from '../../store/appStore';

const Marketplace = () => {
  const marketItems = useStore((state) => state.marketItems);
  const handleTrade = useStore((state) => state.handleTrade);

  return (
    <div className="marketplace-container">
      <h1>AI Agent Marketplace</h1>
      <div className="marketplace-content">
        <div className="marketplace-grid">
          {marketItems?.map((agent) => (
            <div key={agent.id} className="market-item">
              <h3>{agent.name}</h3>
              <p className="agent-description">{agent.description}</p>
              <div className="agent-capabilities">
                {agent.capabilities.map((capability, index) => (
                  <span key={index} className="capability-tag">
                    {capability}
                  </span>
                ))}
              </div>
              <div className="agent-stats">
                <span>
                  <span role="img" aria-label="rating">⭐</span> {agent.rating}
                </span>
                <span>
                  <span role="img" aria-label="total users">👥</span> {agent.totalUsers}
                </span>
                <span>
                  <span role="img" aria-label="price">💎</span> {agent.price} CREDITS
                </span>
              </div>
              <button 
                className="market-button"
                onClick={() => handleTrade(agent.id)}
              >
                Purchase Agent
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
