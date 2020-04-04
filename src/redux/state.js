import { rerenderEntireTree } from "../render";

let generateId = (array) => {
    let maxId = Math.max.apply(Math, array.map(el => el.id ));
    return maxId + 1;
};

let state = {
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
};

export let events = {
    addPost: () => {
        let newPost = {
            id: generateId(state.profile.posts),
            message: state.profile.newPostText,
            likesCount: 0
        };

        state.profile.posts.push(newPost);
        state.profile.newPostText = "";
        rerenderEntireTree(state, events);
    },
    updateNewPostText: (postText) => {
        state.profile.newPostText = postText;
        rerenderEntireTree(state, events);
    }
};

export default state;