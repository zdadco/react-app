import React from "react"
import {addMessageActionCreator, messageTextChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let dialogsState = props.store.getState().dialogs;
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());

    };
    let messageTextChange = (text) => {
        props.store.dispatch(messageTextChangeActionCreator(text));
    };

    return (
        <Dialogs dialogs={dialogsState.dialogs} messages={dialogsState.dialogs[0].messages}
                 messageText={dialogsState.messageText} addMessage={addMessage} messageTextChange={messageTextChange}/>
    )
};

export default DialogsContainer
