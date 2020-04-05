import React from "react"
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    let dialogs = props.state.dialogs.map(user => <Dialog key={user.id} user={user}/>);
    let messages = props.state.dialogs[0].messages.map(message => <Message key={message.id} message={message}/>);
    let newMessageEl = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());

    };
    function onNewMessageElChange() {
        props.dispatch(updateNewMessageTextActionCreator(newMessageEl.current.value));
    }

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
                              ref={newMessageEl}
                              value={props.state.newMessageText}
                              onChange={onNewMessageElChange}
                    />
                    <button className={style.add_btn} onClick={addMessage}>Отправить сообщение</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs
