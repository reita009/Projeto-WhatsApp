import '../components/ChatWindow.css'
import EmojiPicker from 'emoji-picker-react';
import { useState,useEffect,useRef } from 'react';

import MessageItem from './MessageItem';


import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export default ({user}) =>{

    const body = useRef();

    const [emojiOpen, setEmojiOpen] = useState(false);
    const [text,setText] = useState('');
    const [list, setList] = useState([
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:123, body:'bla bla bla'},
        {author:123,body:'lo lo'},
        {author:1234,body:'lero lero lero'}
    ]);

    useEffect(()=>{
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
        }
    },[list]);

    const handleEmojiClick = ( emojiObject) =>{
        setText( text + emojiObject.emoji )
    }

    const handleOpenEmoji = () =>{
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () =>{
        setEmojiOpen(false)
    }

    

    const handleSendClick = () =>{

    }



    return(
        <div className="chatWindow">
            <div className="chatWindow-header">
                
                <div className="chatWindow-headerInfor">
                    <img className='chatWindow-avatar ' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    <div className="chatWindow-name">Julio Santana</div>
                    
                </div>

                <div className="chatWindow-headerButtons">

                   <div className="chatWindow-btn">
                        <SearchIcon style={{color: '#919191'}} />
                    </div>

                    <div className="chatWindow-btn">
                        <AttachFileIcon style={{color: '#919191'}} />
                    </div>

                    <div className="chatWindow-btn">
                        <MoreVertIcon style={{color: '#919191'}} />
                    </div> 
                </div>

            </div>
            <div ref={ body } className="chatWindow-body">
                {list.map((item, key)=>(
                    <MessageItem 
                        key={key}
                        data={item}
                        user={user}
                    />
                ))}
            </div>

            <div className="chatWindow-emojiArea" 
                style={{height: emojiOpen ? '450px' : '0px'}}>
                
                <EmojiPicker
                    onEmojiClick={ handleEmojiClick }
                   disableSearchBar 
                   disableSkinTonePicker
                />
            </div>

            <div className="chatWindow-footer">

                <div className="chatWindow--pre">

                   {emojiOpen  &&
                     <div className="chatWindow-btn"
                     onClick={ handleCloseEmoji } >
                    <CloseIcon  style={{color: '#919191'}} />
                </div>
                   }

                    <div className="chatWindow-btn"
                         onClick={ handleOpenEmoji }
                    >
                        <InsertEmoticonIcon style={{color: emojiOpen?'#009688':'#919191'}} />
                    </div>
                </div>

                <div className="chatWindow--inputArea">
                    <input className='chatWindow--input' 
                    type="text" 
                    placeholder='Digite uma mensagem'
                    value={text }
                    onChange={ e => setText(e.target.value) }
                    
                    
                    />
                </div>

                <div className="chatWindow--pos">

                    {/* {text === '' && 
                        <div onClick={ handleMicClick } className="chatWindow-btn">
                            <MicIcon style={{color: listening ? '#126ECE' : '#919191'}} />
                        </div>
                    } */}
                   
                        <div onClick={ handleSendClick } className="chatWindow-btn">
                            <SendIcon style={{color: '#919191'}} />
                         </div>
                    
                    
                </div>
            </div>
        </div>
    )
}