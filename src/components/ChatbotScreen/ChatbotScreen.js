import React, { useCallback } from 'react';
import useStore from '../../store/appStore';
import './ChatbotScreen.css';
import LoadingSpinner from '../common/LoadingSpinner/LoadingSpinner';

// Split into smaller components
const ChatHistoryItem = ({ conversation, isActive, onClick }) => (
  <div
    className={`chat-history-item ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    <div className="chat-title">{conversation.title}</div>
    <div className="chat-preview">{conversation.preview}</div>
  </div>
);

const ChatMessages = ({ messages }) => (
  <div className="messages-container">
    {messages.map((message, index) => (
      <div key={index} className={`message ${message.isBot ? 'bot' : 'user'}`}>
        {message.text}
      </div>
    ))}
  </div>
);

function ChatbotScreen() {
  const conversations = useStore((state) => state.conversations);
  const activeConversationId = useStore((state) => state.activeConversationId);
  const setActiveConversation = useStore((state) => state.setActiveConversation);
  const addNewConversation = useStore((state) => state.addNewConversation);
  const inputMessage = useStore((state) => state.inputMessage);
  const setInputMessage = useStore((state) => state.setInputMessage);
  const handleSendMessage = useStore((state) => state.handleSendMessage);
  const isLoading = useStore((state) => state.isLoading);

  const activeConversation = conversations.find(c => c.id === activeConversationId);

  const handleConversationClick = useCallback((id) => {
    setActiveConversation(id);
  }, [setActiveConversation]);

  return (
    <div className="chatbot-screen">
      <div className="chat-history">
        <button className="new-chat-button" onClick={addNewConversation}>
          New Chat
        </button>
        {conversations.map((conversation) => (
          <ChatHistoryItem
            key={conversation.id}
            conversation={conversation}
            isActive={conversation.id === activeConversationId}
            onClick={() => handleConversationClick(conversation.id)}
          />
        ))}
      </div>
      <div className="chat-main">
        <div className="chat-messages">
          <ChatMessages messages={activeConversation?.messages || []} />
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
            disabled={isLoading}
          />
          <button 
            onClick={handleSendMessage} 
            disabled={isLoading}
          >
            <div className={`button-content ${isLoading ? 'loading' : ''}`}>
              {isLoading ? <LoadingSpinner size="small" /> : 'Send'}
            </div>
          </button>
        </div>
      </div>
    </div>  
  );
}

export default ChatbotScreen;
