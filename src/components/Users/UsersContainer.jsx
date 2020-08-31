import React from "react";
import {connect} from "react-redux";
import {
    changeFetchingStatus,
    changeFollowingStatus,
    follow,
    setCurrentPage,
    setTotalUsersCount,
    unfollow,
    updateUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import UsersAPI from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.changeFetchingStatus(true);
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.updateUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.changeFetchingStatus(false);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.changeFetchingStatus(true);
        this.props.setCurrentPage(pageNumber);
        UsersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.updateUsers(data.items);
            this.props.changeFetchingStatus(false);
        });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : undefined}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                isFetching={this.props.isFetching}
                onPageChange={this.onPageChange}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                changeFollowingStatus={this.props.changeFollowingStatus}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersState.isFetching,
        followingInProgress: state.usersState.followingInProgress
    }
};

export default connect(
    mapStateToProps,
    {follow, unfollow, updateUsers, setCurrentPage, setTotalUsersCount, changeFetchingStatus, changeFollowingStatus}
)(UsersContainer);