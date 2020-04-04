import React from "react"
import {NavLink} from "react-router-dom";
import style from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={'/dialogs/' + props.user.id} activeClassName={style.active}>{props.user.name}</NavLink>
        </div>
    )
}

export default Dialog
