import React from 'react';

const MessageList = ({ messages }) => (
  <div className="messages-container">
    {messages.map((message, index) => (
      <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
        {message.text}
      </div>
    ))}
  </div>
);

export default MessageList;
