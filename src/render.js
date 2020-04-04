import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export let rerenderEntireTree = (state, events) => {
    ReactDOM.render(
        <App
            state={state}
            events={events}
        />,
        document.getElementById('root'));
};

