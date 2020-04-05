import React from "react"
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.dialogs.map(user => <Dialog key={user.id} user={user}/>);
    let messages = props.messages.map(message => <Message key={message.id} message={message}/>);
    let messageTextEl = React.createRef();

    let onAddMessage = () => {
        props.addMessage();

    };
    let onMessageTextChange = () => {
        props.messageTextChange(messageTextEl.current.value);
    };

    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.dialogs}>
                {dialogs}
            </div>
            <div className={style.dialog}>
                <div className={style.messages}>
                    {messages}
                </div>
                <div className={style.add}>
                    <textarea className={style.add_message_area}
                              ref={messageTextEl}
                              value={props.messageText}
                              onChange={onMessageTextChange}
                    />
                    <button className={style.add_btn} onClick={onAddMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs
