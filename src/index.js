import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let messages = [
    {id: 1, text: 'Hi'},
    {id: 2, text: 'How are you?'},
    {id: 3, text: 'How is your name?'},
];
let dialogs = [
    {id: 1, name: 'Yaroslav', messages: messages},
    {id: 2, name: 'Valera', messages: messages},
    {id: 3, name: 'Dima', messages: messages},
    {id: 4, name: 'Vova', messages: messages}
];

let posts = [
    {id: 2, message: 'It\'s my blog', likesCount: 0},
    {id: 1, message: 'Hello world!!', likesCount: 23},
];

ReactDOM.render(<App posts={posts} dialogs={dialogs}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
