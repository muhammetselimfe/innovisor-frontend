import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import SentimentAnalysis from './components/SentimentAnalysis/SentimentAnalysis';
import Marketplace from './components/Marketplace/Marketplace';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import LeftSidebarTop from './components/LeftSidebar/LeftSidebarTop';
import LeftSidebarBottom from './components/LeftSidebar/LeftSidebarBottom';
import Navbar from './components/Navbar/Navbar';
import ChatbotScreen from './components/ChatbotScreen/ChatbotScreen';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content-wrapper">
          <main className="main-content">
            <Routes>
              <Route path="/" element={
                <div className="home-layout">
                  <div className="left-sidebar">
                    <LeftSidebarTop />
                    <LeftSidebarBottom />
                  </div>
                  <ChatbotScreen />
                </div>
              } />
              <Route path="/sentiment" element={<SentimentAnalysis />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/transaction" element={<TransactionHistory />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
