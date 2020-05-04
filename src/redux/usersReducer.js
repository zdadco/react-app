const CHANGE_FOLLOW_STATUS = "CHANGE-FOLLOW-STATUS";
const UPDATE_USERS = "UPDATE-USERS";

let initialState = {
    users: [],
    pageSize: 4,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            };
        case CHANGE_FOLLOW_STATUS:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: !u.followed
                        }
                    }
                    return u;
                })
            };
        default:
            return state;
    }
};

export const changeFollowStatusActionCreator = (userId) => {
    return {
        type: CHANGE_FOLLOW_STATUS,
        userId
    }
};
export const updateUsersActionCreator = (users) => {
    return {
        type: UPDATE_USERS,
        users
    }
};

export default usersReducer;