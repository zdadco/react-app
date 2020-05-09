import React from "react"
import logo from "../../asserts/logo.png"
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img alt={"logo"} src={logo}/>

            <div className={style.loginBlock}>
                {
                    props.isAuth
                        ? props.login
                        : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header
