import React from "react"
import style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

class Dialogs extends React.Component {

    componentDidMount() {
        this.dialogs = this.props.dialogs.map(user => <Dialog key={user.id} user={user}/>);
        this.messages = this.props.messages.map(message => <Message key={message.id} message={message}/>);
        this.messageTextEl = React.createRef();
    }

    onAddMessage = () => {
        this.props.addMessage();

    };
    onMessageTextChange = () => {
        this.props.messageTextChange(this.messageTextEl.current.value);
    };

    render() {
        return (
            <div className={style.dialogs_wrapper}>
                <div className={style.dialogs}>
                    {this.dialogs}
                </div>
                <div className={style.dialog}>
                    <div className={style.messages}>
                        {this.messages}
                    </div>
                    <div className={style.add}>
                        <textarea className={style.add_message_area}
                                  ref={this.messageTextEl}
                                  value={this.props.messageText}
                                  onChange={this.onMessageTextChange}
                        />
                        <button className={style.add_btn} onClick={this.onAddMessage}>Отправить сообщение</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Dialogs
