import React from "react"
import logo from "../../asserts/logo.png"
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img alt={"logo"} src={logo}/>
        </header>
    )
};

export default Header
