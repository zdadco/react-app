const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const UPDATE_USERS = "UPDATE-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const CHANGE_FETCHING_STATUS = "CHANGE-FETCHING-STATUS";

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USERS:
            return {
                ...state, users: action.users
            };
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            };
            case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u;
                })
            };
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            };
        case CHANGE_FETCHING_STATUS:
            return {
                ...state, isFetching: !state.isFetching
            };
        default:
            return state;
    }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const updateUsers = (users) => {
    return {
        type: UPDATE_USERS,
        users
    }
};
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
};
export const setTotalUsersCount = (totalCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
};
export const changeFetchingStatus = (isFetching) => {
    return {
        type: CHANGE_FETCHING_STATUS,
        isFetching
    }
};

export default usersReducer;