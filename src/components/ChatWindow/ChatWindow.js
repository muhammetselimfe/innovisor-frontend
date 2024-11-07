import React from 'react';
import './ChatWindow.css';
import ChatHeader from './components/ChatHeader';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import useStore from '../../store/appStore';

const ChatWindow = () => {
  const messages = useStore(state => state.messages);
  const inputMessage = useStore(state => state.inputMessage);
  const setInputMessage = useStore(state => state.setInputMessage);
  const handleSendMessage = useStore(state => state.handleSendMessage);

  return (
    <div className="chat-window">
      <ChatHeader />
      <MessageList messages={messages} />
      <ChatInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatWindow;
