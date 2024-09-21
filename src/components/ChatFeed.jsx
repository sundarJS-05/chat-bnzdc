
import React from 'react'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = ( props) => {

    let { chats, activeChat, username, messages} = props

    let chat = chats && chats[activeChat]

    let renderMessages = ()=>{
        let keys = Object.keys(messages)

        return ( keys.map( (key, index)=>{
            let message = messages[key]

            let lastMessagekey = index === 0? null : keys[index-1]

            let isMyMessage = username === message.sender.username

            return(
                <div key={`message_${index}`}  style={ {width:'100%'}}>

                    <div className='message-block'>
                        {
                            isMyMessage ? <MyMessage/> : <TheirMessage/>
                        }

                    </div>

                    <div className='read-receipts' >
                        read-receipts

                    </div>

                </div>
            )

        })
    )

    }

    renderMessages()

    if(!chat)  return "Loading..!"


  return (
       <div className='chat-feed'>

        <div className='chat-title-container'>

            <div className='chat-title'>
                {chat?.title}
            </div>

            <div className='chat-subtitle'>
                { chat.people.map(  (person)=>  (  person.person.username ))}

            </div>

        </div>

        </div>
  )
}

export default ChatFeed