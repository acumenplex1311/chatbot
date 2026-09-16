import ChatMessage from './ChatMessage'

function ChatMessages() {
  const chatMessages = [
    { message: 'Hello Chatbot', sender: 'user', id: 1 },
    { message: 'Hello! How can I help you?', sender: 'robot', id: 2 },
    { message: 'What is today date?', sender: 'user', id: 3 },
    { message: 'Today is September 16', sender: 'robot', id: 4 },
  ]
  return (
    <>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        )
      })}
    </>
  )
}

export default ChatMessages
