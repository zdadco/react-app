import React from "react"
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Yaroslav'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Dima'},
        {id: 4, name: 'Vova'}
    ].map(user =>  <Dialog user={user}/>)

    let messages = [
        {id: 1, text: 'Hi'},
        {id: 2, text: 'How are you?'},
        {id: 3, text: 'How is your name?'},
    ].map(message =>  <Message message={message}/>)

    return (
        <div className={style.dialogs_wrapper}>
            <div className={style.dialogs}>
                { dialogs }
            </div>
            <div className={style.messages}>
                { messages }
            </div>
        </div>
    )
}

export default Dialogs
