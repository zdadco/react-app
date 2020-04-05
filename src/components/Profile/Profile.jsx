import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsListContainer from "./PostsList/PostsListContainer";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <PostsListContainer/>
        </div>
    )
};

export default Profile
