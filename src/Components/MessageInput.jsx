import React, {useState} from 'react'
import { MdSend, MdKeyboardVoice } from "react-icons/md";
import { default as axios } from 'axios';
function MessageInput({messages,setMessages}) {
  const [message, setMessage] = useState('');
  
  const inputChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };


  const sendMessages=async ()=>{
    if(message.trim()){
      storeMessage(message,true)
      setMessage('')
      await responseMessagefunction()
    }
  }

  const storeMessage=(message,userType)=> setMessages((prevMessages) => [...prevMessages, {text:message, isUser:userType}]);
  const responseMessagefunction=()=>{
    const url = `https://api.api-ninjas.com/v1/loremipsum?paragraphs=${messages[messages.length - 1]}`

    axios.get(url,{
      headers:{
        'X-Api-Key': 'mpfZbkdBD5tnXJJ5KixL/Q==3pGAx17NM0k3dwX5',
        'Content-Type': 'application/json',
      },
    })
    .then(async function(response){
      console.log("================================>",response?.data?.text,false)
       await storeMessage(response?.data?.text,false)
    })
    .catch(function (error) {
      console.error('Error fetching data:', error);
    })
    .finally(function () {
      console.log('Request completed.');
    });
  }

  return (
    <div style={styles.design}>

      <input 
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          sendMessages();
        }
      }}
      style={styles.textBox}
      value={message}
      placeholder="Type a message..."
      onChange={inputChange}
       />

       {message?<MdSend style={styles.Button} onClick={sendMessages}/>:<MdKeyboardVoice style={styles.Button} />}

    </div>
  )
}

const styles = {
  design:{
    display:'flex',
    justifyContent:'space-between',
    backgroundColor:'white',
    paddingBottom: 30,
    marginBottom: 20,
    
  },
  textBox:{
    width:'100%',
    paddingBottom: 5,
    borderColor:'#f1f7f7',
    backgroundColor:'#f6fdfd',
    borderWidth:'1px',
    borderRadius: '11px',
  },
  Button:{
    height:25,
    width:25,
    padding:'3px'
  }
}
export default MessageInput