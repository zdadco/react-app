import React from "react"
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogs = props.dialogs.map(user => <Dialog user={user}/>);
    let messages = props.dialogs[0].messages.map(message => <Message message={message}/>);

    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.dialogs}>
                {dialogs}
            </div>
            <div className={style.messages}>
                {messages}
            </div>
        </div>
    )
};

export default Dialogs
