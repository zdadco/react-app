import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsList from "./PostsList/PostsList";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsList posts={props.state.posts}
                       newPostText={props.state.newPostText}
                       events={props.events}
            />
        </div>
    )
};

export default Profile
