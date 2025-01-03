import webImage from './Components/assets/images/Web.jpg';
import { BsChatRightDots } from "react-icons/bs";
import './App.css';
import Chatwindow from './Components/Chatwindow';
import { useState } from 'react';

function App() {

  const [message,setMessage] = useState('false')

  const toggleChat =()=>{
    setMessage(!message)
  }
  return (<div>
    <img src= {webImage} alt='web' />
    <BsChatRightDots style={styles.design} onClick={toggleChat}/>
    {message?null:<Chatwindow toggleChat={toggleChat} />}
    </div>
  );
}

const styles = {
  design:{
    position:'fixed',
    right:'5%',
    bottom:'5%',
    width:'100px',
    height:'100px',
    color:'black',
    cursor:'pointer'

  }
}
export default App;
