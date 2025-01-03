import React,{useState} from 'react'
import ChatHeading from './ChatHeading'
import MessageBody from './MessageBody'
import MessageInput from './MessageInput'

function Chatwindow({toggleChat}) {
   const [messages, setMessages] = useState([])


  return (
  <div style={styles.coverStyle}>
      <div>
        <ChatHeading toggleChat={toggleChat}/>
     </div>

     <div>
        <MessageBody messages={messages} />
     </div>

     <div>
        <MessageInput messages={messages} setMessages={setMessages} />
     </div>
  </div>
  )
}

const styles = {
        coverStyle:{
            position:'fixed',
            right:'0',
            bottom:'0',
            borderRadius: '20px 10px 0 0', 
            height:'60%',
            width:'23%',
            backgroundColor:'white'
        }
}

export default Chatwindow