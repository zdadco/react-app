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
            return {
                ...state,
                dialogs: state.dialogs.map(d => {
                    if (d.id === 1) {
                        return {
                            ...d,
                            messages: [...d.messages, {
                                id: generateId(state.dialogs[0].messages),
                                text: state.messageText
                            }]
                        }
                    }
                    return d;
                }),
                messageText: "",
            };
        case MESSAGE_TEXT_CHANGE:
            return {
                ...state,
                messageText: action.newText
            };
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