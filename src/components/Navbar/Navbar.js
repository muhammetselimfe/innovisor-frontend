import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img 
          src={`${process.env.PUBLIC_URL}/logo.png`} 
          alt="Logo" 
          className="navbar-logo" 
          loading="lazy" 
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="navbar-buttons">
        <button onClick={() => navigate('/sentiment')} aria-label="Sentiment Analysis">
          Sentiment Analysis
        </button>
        <button onClick={() => navigate('/marketplace')} aria-label="Marketplace">
          Marketplace
        </button>
        <button onClick={() => navigate('/transaction')} aria-label="Transaction History">
          Transaction History
        </button>
      </div>
      <button className="connect-button" onClick={() => window.location.hash = '#connect'} aria-label="Connect">
        Connect
      </button>
    </nav>
  );
}

export default Navbar;
