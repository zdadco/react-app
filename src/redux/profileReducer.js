let generateId = (array) => {
    let maxId = Math.max.apply(Math, array.map(el => el.id));
    return maxId + 1;
};

const ADD_POST = 'ADD-POST';
const POST_TEXT_CHANGE = 'POST-TEXT-CHANGE';

let initialState = {
    postText: "",
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
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: generateId(state.posts),
                message: state.postText,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.postText = "";
            return state;
        case POST_TEXT_CHANGE:
            state.postText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const postTextChangeActionCreator = (text) => {
    return {
        type: POST_TEXT_CHANGE,
        newText: text
    }
};

export default profileReducer;