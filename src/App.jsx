
import React from 'react'
import './App.css'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'


export const App = ()=> {
  return (


    <ChatEngine
    height='80vh'
    projectID='9f76674f-9b61-4ad6-b448-f1a360be298b'
    userName='sundarJS-05'
    userSecret='cengineTY2'
    renderChatFeed= {
      (chatAppProps)=>  <ChatFeed  {...chatAppProps} />
    }

    />
    
  )
}


