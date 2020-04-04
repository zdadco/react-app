let state = {
    profile: {
        posts: [
            {
                id: 2,
                message: 'It\'s my blog',
                likesCount: 0
            },
            {
                id: 1,
                message: 'Hello world!!',
                likesCount: 23
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

export default state;