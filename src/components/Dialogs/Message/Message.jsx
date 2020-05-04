import React from "react"
import style from './Message.module.css'

class Message extends React.Component {

    render() {
        return (
            <div className={style.message}>
                {this.props.message.text}
            </div>
        )
    }

}


export default Message
