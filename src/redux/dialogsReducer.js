let generateId = (array) => {
    let maxId = Math.max.apply(Math, array.map(el => el.id));
    return maxId + 1;
};

const ADD_MESSAGE = 'ADD-MESSAGE';
const MESSAGE_TEXT_CHANGE = 'MESSAGE-TEXT-CHANGE';

let initialState = {
    messageText: "",
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
                text: state.messageText,
            };

            state.dialogs[0].messages.push(newPost);
            state.messageText = "";
            return state;
        case MESSAGE_TEXT_CHANGE:
            state.messageText = action.newText;
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
export const messageTextChangeActionCreator = (text) => {
    return {
        type: MESSAGE_TEXT_CHANGE,
        newText: text
    }
};

export default dialogsReducer;