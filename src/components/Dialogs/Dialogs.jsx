import React from "react"
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.state.dialogs.map(user => <Dialog key={user.id} user={user}/>);
    let messages = props.state.dialogs[0].messages.map(message => <Message key={message.id} message={message}/>);

    let addMessageEl = React.createRef();
    let addMessage = () => {
        let message = addMessageEl.current.value;
        alert(message);
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
                    <textarea className={style.add_message_area} ref={addMessageEl}/>
                    <button className={style.add_btn} onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs
