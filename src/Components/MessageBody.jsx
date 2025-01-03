import { useEffect,useRef } from "react";
import React from 'react'

function MessageBody({messages,responseMessage}) {
  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div style={styles.design}>
     {messages.map((message, index) => (
      message.isUser?
        (<div key={index} style={styles.message}>
          {message.text}
        </div>):(<div style={styles.resp}>
          {message.text}
        </div>)
        
      ))}
      <div ref={messageEndRef} />
    </div>
  )
}

const styles = {
  design:{
    height:'330px',
    paddingTop: '10px',
    display:'flex',
    flexDirection:'column',
    overflowY: 'auto'
  },
  message: {
    display: 'block',
    marginBottom: '8px',
    marginRight: '3px',
    paddingRight: '15px',
    paddingLeft: '15px',
    paddingBottom: '5px',
    borderRadius: '9px',
    backgroundColor: '#25baba',
    maxWidth: '70%',
    wordWrap: 'break-word',
    alignSelf: 'flex-end',
    whiteSpace: 'pre-wrap',
  },
  resp: {
    display: 'block',
    marginBottom: '8px',
    marginLeft:'5px',
    marginRight: '3px',
    paddingRight: '15px',
    paddingLeft: '15px',
    paddingBottom: '5px',
    borderRadius: '9px',
    backgroundColor: '#e3fafa',
    maxWidth: '70%',
    wordWrap: 'break-word',
    alignSelf: 'flex-start',
    whiteSpace: 'pre-wrap',
  },
}
export default MessageBody