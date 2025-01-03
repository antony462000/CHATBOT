import React from 'react'
import { MdClose } from "react-icons/md";

function ChatHeading({toggleChat}) {
  return (
    <div style={styles.design}>
      <div><h3>Antony</h3></div>
      <MdClose style={styles.Button} size='20px' onClick={toggleChat}/>
    </div>
  )
}

const styles = {
  design:{
    display:'flex',
    alignItems:'center',
    borderRadius: '20px 10px 0 0', 
    justifyContent:'space-between',
    padding:'1px 20px',
    backgroundColor:'#55f7c8'
  },
  Button:{
    cursor:'pointer'
  }
}
export default ChatHeading