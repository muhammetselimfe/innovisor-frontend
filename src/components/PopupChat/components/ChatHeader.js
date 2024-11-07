import React from 'react';

const ChatHeader = ({ onClose }) => (
  <div className="chat-header">
    <h1>Innov8 Assistant</h1>
    <button className="close-button" onClick={onClose}>×</button>
  </div>
);

export default ChatHeader;
