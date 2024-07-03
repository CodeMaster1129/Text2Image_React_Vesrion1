const Message = ({ data }) => {
    return(
        <>
         <div className={data.who === 'anna' ? 'message-left-container' : 'message-right-container'}>
            <span className='message'>
                {data.content}
            </span>
            <img className='avatar' src={data.who === 'anna' ? '/images/bot_icon.png' : '/images/me.png'} 
                alt=''/>
        </div>
        </>
    )
}

export default Message;