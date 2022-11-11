import '../components/ChatListItem.css';

const headerAvatar = 'https://www.w3schools.com/howto/img_avatar.png';

export default ({ onClick, active, data }) =>{
    return(
        <div 
            className={`chatListItem ${active?'active':''}`}
            onClick={onClick}
        >
            <img className='chatListItem-avatar' src={ data.image } />
            <div className="chatListItem-lines">

                <div className="chatListItem-line">
                    <div className="chatListItem-name">
                        {data.title}
                    </div>
                    <div className="chatListItem-date">19:00</div>
                </div>

                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>Fruitless kingdom books wizard Tuckborough beard sheep seen. Should opinion Elf-maiden games flowers. Elderly chap. Big grey beard, pointy hat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}