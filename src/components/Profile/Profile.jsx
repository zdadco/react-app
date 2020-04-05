import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsList from "./PostsList/PostsList";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsList posts={props.posts} postText={props.postText}
                       addPost={props.addPost} postTextChange={props.postTextChange}/>
        </div>
    )
};

export default Profile
