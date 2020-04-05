import profileReducer, {ADD_POST, UPDATE_NEW_POST_TEXT} from "./profileReducer";
import dialogsReducer, {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "./dialogsReducer";

let store = {
    _state: {
        profile: {
            newPostText: "",
            posts: [
                {
                    id: 1,
                    message: 'Hello world!!',
                    likesCount: 23
                },
                {
                    id: 2,
                    message: 'It\'s my blog',
                    likesCount: 0
                }
            ]
        },
        dialogs: {
            newMessageText: "",
            dialogs: [
                {
                    id: 1,
                    name: 'Yaroslav',
                    messages: [
                        {
                            id: 1,
                            text: 'Hi'
                        },
                        {
                            id: 2,
                            text: 'How are you?'
                        },
                        {
                            id: 3,
                            text: 'How is your name?'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Valera',
                    messages: []
                },
                {
                    id: 3,
                    name: 'Dima',
                    messages: []
                },
                {
                    id: 4,
                    name: 'Vova',
                    messages: []
                }
            ]
        }
    },
    _callSubscriber() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialogs = dialogsReducer(this._state.dialogs, action);

        this._callSubscriber(this._state);
    }
};

export default store;