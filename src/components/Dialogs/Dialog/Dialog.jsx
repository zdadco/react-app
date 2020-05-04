import React from "react"
import {NavLink} from "react-router-dom";
import style from './Dialog.module.css'

class Dialog extends React.Component {

    render() {
        return (
            <div className={style.dialog + ' ' + style.active}>
                <NavLink
                    to={'/dialogs/' + this.props.user.id}
                    activeClassName={style.active}>{this.props.user.name}
                </NavLink>
            </div>
        )
    }

}

export default Dialog
