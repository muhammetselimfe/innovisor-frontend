import React from 'react';
import './App.css';
import SentimentAnalysis from './components/SentimentAnalysis/SentimentAnalysis';
import Marketplace from './components/Marketplace/Marketplace';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import useStore from './store/appStore';
import ChatWindow from './components/ChatWindow/ChatWindow.js';
import LeftSidebarTop from './components/LeftSidebar/LeftSidebarTop';
import LeftSidebarBottom from './components/LeftSidebar/LeftSidebarBottom';

function App() {
  const currentPage = useStore((state) => state.currentPage);
  const setCurrentPage = useStore((state) => state.setCurrentPage);

  const renderContent = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div className="home-layout">
            <div className="left-sidebar">
              <LeftSidebarTop />
              <LeftSidebarBottom />
            </div>
            <ChatWindow />
          </div>
        );
      case 'sentiment':
        return <SentimentAnalysis />;
      case 'marketplace':
        return <Marketplace />;
      case 'transaction':
        return <TransactionHistory />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-logo-container">
          <img 
            src={`${process.env.PUBLIC_URL}/logo.png`} 
            alt="Logo" 
            className="navbar-logo" 
            loading="lazy" 
            onClick={() => setCurrentPage('home')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="navbar-buttons">
          <button onClick={() => setCurrentPage('sentiment')} aria-label="Sentiment Analysis">
            Sentiment Analysis
          </button>
          <button onClick={() => setCurrentPage('marketplace')} aria-label="Marketplace">
            Marketplace
          </button>
          <button onClick={() => setCurrentPage('transaction')} aria-label="Transaction History">
            Transaction History
          </button>
        </div>
        <button className="connect-button" onClick={() => window.location.hash = '#connect'} aria-label="Connect">
          Connect
        </button>
      </nav>
      <div className="content-wrapper">
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
