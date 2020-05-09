let generateId = (array) => {
    let maxId = Math.max.apply(Math, array.map(el => el.id));
    return maxId + 1;
};

const ADD_POST = 'ADD-POST';
const POST_TEXT_CHANGE = 'POST-TEXT-CHANGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

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
    ],
    profile: null
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: generateId(stateCopy.posts),
                message: stateCopy.postText,
                likesCount: 0
            };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.postText = "";
            return stateCopy;
        case POST_TEXT_CHANGE:
            stateCopy.postText = action.newText;
            return stateCopy;
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile };
        default:
            return state;
    }
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const postTextChangeActionCreator = (newText) => {
    return {
        type: POST_TEXT_CHANGE,
        newText
    }
};
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;