import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom"

import './App.css'
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Redirect to='/profile'/>
                </Switch>
            </div>
        </div>
    )
};

export default App;
