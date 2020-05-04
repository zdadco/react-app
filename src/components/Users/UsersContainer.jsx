import React from "react";
import {connect} from "react-redux";
import {changeFollowStatusActionCreator, updateUsersActionCreator} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
    return {
        users: state.usersState.users
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        changeFollowStatus: (userId) => {
            dispatch(changeFollowStatusActionCreator(userId));
        },
        updateUsers: (users) => {
            dispatch(updateUsersActionCreator(users));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Users);