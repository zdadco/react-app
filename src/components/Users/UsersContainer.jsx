import React from "react";
import {connect} from "react-redux";
import {
    changeFetchingStatus,
    changeFollowStatus,
    setCurrentPage,
    setTotalUsersCount,
    updateUsers
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.changeFetchingStatus(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response =>  {
                this.props.updateUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
                this.props.changeFetchingStatus(false);
            });
    }

    onPageChange = (pageNumber) => {
        this.props.changeFetchingStatus(true);
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.updateUsers(response.data.items);
                this.props.changeFetchingStatus(false);
            });
    };

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : undefined }
            <Users
                totalUsersCount = {this.props.totalUsersCount}
                pageSize = {this.props.pageSize}
                currentPage = {this.props.currentPage}
                users = {this.props.users}
                isFetching = {this.props.isFetching}
                onPageChange = {this.onPageChange}
                changeFollowStatus = {this.props.changeFollowStatus}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersState.users,
        pageSize: state.usersState.pageSize,
        totalUsersCount: state.usersState.totalUsersCount,
        currentPage: state.usersState.currentPage,
        isFetching: state.usersState.isFetching
    }
};

export default connect(
    mapStateToProps,
    { changeFollowStatus, updateUsers, setCurrentPage, setTotalUsersCount, changeFetchingStatus }
) (UsersContainer);