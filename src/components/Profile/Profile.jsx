import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsList from "./PostsList/PostsList";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsList posts={props.state.posts}/>
        </div>
    )
};

export default Profile
