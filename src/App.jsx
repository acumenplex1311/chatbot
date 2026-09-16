import { useState } from 'react';
import ChatInput from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import './App.css';

function App() {
  const [chatMessages, setChatMessages] = useState([
    { message: 'Hello Chatbot', sender: 'user', id: 1 },
    { message: 'Hello! How can I help you?', sender: 'robot', id: 2 },
    { message: 'What is today date?', sender: 'user', id: 3 },
    { message: 'Today is September 16', sender: 'robot', id: 4 },
  ]);

  return (
    <div className='app-container'>

      <ChatMessages
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
