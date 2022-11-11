import './NewChat.css';
import { useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const headerAvatar = 'https://www.w3schools.com/howto/img_avatar.png';

export default ({user, chatList, show, setShow}) =>{
    const [list, setList] = useState([
        {id:123,avatar:headerAvatar, name:'Nycole Santana'},
        {id:123,avatar:headerAvatar, name:'Nycole Santana'},
        {id:123,avatar:headerAvatar, name:'Nycole Santana'},
        {id:123,avatar:headerAvatar, name:'Nycole Santana'}
    ])

    const handleClose = () =>{
        setShow(false);
    }

    return(
        <div className="newChat" 
        style={{left:show? 0:-415}}>
            <div className="newChat-head">
                <div onClick={handleClose} className="newchat-backButton">
                    <ArrowBackIcon style={{color:'#FFF'}}/>
                </div>
                <div className="newChat-headTitle">
                    nova conversa
                </div>
            </div>
            <div className="newChat-list">
                    {list.map((item, key)=>(
                        <div className="newChat-item" key={key}>
                            <img className='newChat-itemAvatar' src={item.avatar}  />
                            <div className="newChat-itemName">
                                {item.name}
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}