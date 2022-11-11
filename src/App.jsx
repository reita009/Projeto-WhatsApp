import { useState,useEffect } from 'react';
import './App.css'

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import NewChat from './components/NewChat';

function App() {
    const headerAvatar = 'https://www.w3schools.com/howto/img_avatar.png';

    const [chatList, setChatList] = useState([
        {chatId:1, title: 'Nycole', image: headerAvatar},
        {chatId:2, title: 'Julio', image: headerAvatar},
        {chatId:3, title: 'Pew', image: headerAvatar},
        {chatId:4, title: 'Zeldinha', image: headerAvatar}
    ]) 
    const [activeChat, setActiveChat] = useState({});
    const [user, setUser] = useState({
        id:1234,
        avatar: headerAvatar,
        name:'Julio Santana'
    })
    const [showNewChat, setShowNewChat] = useState(false);

    const handleNewChat = () =>{
         setShowNewChat(true);
    }

  return (
    <div className="app-window">
        <div className="sidebar">
            <NewChat 
                user={user}
                chatList={chatList}
                show={showNewChat}
                setShow={setShowNewChat}
            />
            <header>
               <img className='header-avatar' src={ user.avatar } alt="" />
               <div className="header-buttons">

                  <div className="header-btn">
                      <DonutLargeIcon style={{color:'#919191'}} />
                  </div>

                  <div className="header-btn">
                      <ChatIcon onClick={ handleNewChat } style={{color:'#919191'}} />
                  </div>

                  <div className="header-btn">
                      <MoreVertIcon style={{color:'#919191'}} />
                  </div>
               </div>
            </header>

            <div className="search">
                <div className="search-input">
                    <SearchIcon fontSize='small' style={{color:'#919191'}} />
                    <input type="search" placeholder='Procurar ou começar uma nova conversa' />
                </div>
            </div>

            <div className="chat-list">
                {chatList.map((item, key)=>(
                    <ChatListItem 
                        key={key}
                        data={ item }
                        active={ activeChat.chatId === chatList[key].chatId}
                        onClick={()=> setActiveChat(chatList[key]) }
                    />
                ))}
            </div>
        </div>

        <div className="contentArea">
            {activeChat.chatId !== undefined &&
                <ChatWindow
                    user={user}
                />
            }
            {activeChat.chatId === undefined && 
                <ChatIntro />
            }
        </div>
    </div>
  )
}

export default App
