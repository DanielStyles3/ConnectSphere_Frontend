import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import "./messenger.css"
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'

export default function messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
            </div>
        </div>
        <div className="chatBox">
        <div className="chatBoxWrapper">
            <div className="chatBoxTop">
            <Message  />
            <Message own={true}  />
            <Message  />


            </div>
            <div className="chatBoxBottom">
                <textarea className='chatMenuInput' placeholder='Write something ....'></textarea>
                <button className="chatSubmitButton">Send</button>
            </div>
        </div>

        </div>
        <div className="chatOnline">
            <div className="chatOnlineWrapper">
                
            </div>
        </div>
        </div>
    </>
   
  )
}
