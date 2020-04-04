import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"

import './App.css'
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Dialogs from "./components/Dialogs/Dialogs"
import Profile from "./components/Profile/Profile";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile state={props.state.profile} events={props.events}/> }/>
                    <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogs}/> }/>
                </div>
            </div>
        </BrowserRouter>
    )
};

export default App;
