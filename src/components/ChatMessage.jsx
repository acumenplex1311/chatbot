import UserProfileImage from '../assets/user.png'
import RobotProfileImage from '../assets/robot.png'
import './ChatMessage.css'

function ChatMessage({ message, sender }) {
  // const { message, sender } = prop

  return (
    <div>
      {sender === 'robot' && (
        <img src={RobotProfileImage} className='chat-message-profile' />
      )}
      {message}

      {sender === 'user' && (
        <img src={UserProfileImage} className='chat-message-profile' />
      )}
    </div>
  )
}

export default ChatMessage
