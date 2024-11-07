import React from 'react';

const ChatInput = ({ inputMessage, setInputMessage, handleSendMessage }) => (
  <div className="input-container">
    <input
      type="text"
      value={inputMessage}
      onChange={(e) => setInputMessage(e.target.value)}
      placeholder="Type your message..."
      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
    />
    <button onClick={handleSendMessage}>Send</button>
  </div>
);

export default ChatInput;
