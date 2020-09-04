import React from "react";
import {connect} from "react-redux";
import {
    changeFollowingStatus,
    follow, getUsers,
    setTotalUsersCount,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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

export default connect(mapStateToProps,
    {
        follow, unfollow,
        setTotalUsersCount, changeFollowingStatus, getUsers
    })(UsersContainer);