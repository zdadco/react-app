import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsListContainer from "./PostsList/PostsListContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsListContainer store={props.store}/>
        </div>
    )
};

export default Profile
