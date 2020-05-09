import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsListContainer from "./PostsList/PostsListContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <PostsListContainer/>
        </div>
    )

};

export default Profile
