let generateId = (array) => {
    let maxId = Math.max.apply(Math, array.map(el => el.id));
    return maxId + 1;
};

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                id: generateId(state.dialogs[0].messages),
                text: state.newMessageText,
            };

            state.dialogs[0].messages.push(newPost);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
};


export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
};
export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
};

export default dialogsReducer;