import ChatInput from './components/ChatInput'
import ChatMessage from './components/ChatMessage'
import './App.css'

function App() {
  const chatMessages = [
    { message: 'Hello Chatbot', sender: 'user' },
    { message: 'Hello! How can I help you?', sender: 'robot' },
    { message: 'What is today date?', sender: 'user' },
    { message: 'Today is September 16', sender: 'robot' },
  ]
  return (
    <>
      <ChatInput />

      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
          />
        )
      })}
    </>
  )
}

export default App
