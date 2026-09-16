import { useState } from 'react';
import { Chatbot } from 'supersimpledev';
import './ChatInput.css';

function ChatInput({ chatMessages, setChatMessages }) {
  const [inputMessage, setInputMessage] = useState('');

  function handleSendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputMessage,
        sender: 'user',
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputMessage);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
      },
    ]);
    setInputMessage('');
  }

  function handleChange(event) {
    setInputMessage(event.target.value);
  }

  return (
    <div className='chat-input-container'>
      <input
        type='text'
        placeholder='Send a message to chatbot'
        onChange={handleChange}
        value={inputMessage}
        className='chat-input'
        size='30'
      />
      <button onClick={handleSendMessage} className='send-btn'>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
