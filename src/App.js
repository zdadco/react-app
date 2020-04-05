import React from 'react'
import {Route} from "react-router-dom"

import './App.css'
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
            </div>
        </div>
    )
};

export default App;
