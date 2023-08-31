import React from 'react';
import "./message.css"

function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className="messageTop">
        <img className='conversationImg' src='https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        <p className='messageText'>Hello to this message</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
      
    </div>
  )
}

export default Message
