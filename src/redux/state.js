let generateId = (array) => {
    let maxId = Math.max.apply(Math, array.map(el => el.id ));
    return maxId + 1;
};

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
        switch (action.type) {
            case 'ADD-POST': {
                let newPost = {
                    id: generateId(this._state.profile.posts),
                    message: this._state.profile.newPostText,
                    likesCount: 0
                };

                this._state.profile.posts.push(newPost);
                this._state.profile.newPostText = "";
                break
            }
            case 'UPDATE-NEW-POST-TEXT': {
                this._state.profile.newPostText = action.newText;
                break
            }
        }
        this._callSubscriber(this._state);
    }
};

export default store;