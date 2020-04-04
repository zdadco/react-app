import React from 'react'
import {Route} from "react-router-dom"

import './App.css'
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Dialogs from "./components/Dialogs/Dialogs"
import Profile from "./components/Profile/Profile";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/profile'
                       render={() => <Profile state={props.state.profile} dispatch={props.dispatch}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.dialogs}/>}/>
            </div>
        </div>
    )
};

export default App;
