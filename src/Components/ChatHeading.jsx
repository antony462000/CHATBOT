import React from 'react'
import { MdClose } from "react-icons/md";

function ChatHeading({toggleChat}) {
  return (
    <div style={styles.design}>
<div>
  <h3 style={{ color: 'white' }}>Antony</h3>
</div>     
 <MdClose style={styles.Button} size='20px' onClick={toggleChat}/>
    </div>
  )
}

const styles = {
  design:{
    display:'flex',
    alignItems:'center',
    borderRadius: '20px 10px 8px 12px', 
    justifyContent:'space-between',
    padding:'1px 20px',
    backgroundColor:'#e17c95'
  },
  Button:{
    cursor:'pointer',
    color:'white',
  }
}
export default ChatHeading