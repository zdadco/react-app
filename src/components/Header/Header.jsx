import React from "react"
import logo from "../../asserts/logo.png"
import style from './Header.module.css'

class Header extends React.Component {

    render() {
        return (
            <header className={style.header}>
                <img alt={"logo"} src={logo}/>
            </header>
        )
    }

}

export default Header
