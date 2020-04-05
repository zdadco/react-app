import React from "react"
import Profile from "./Profile";
import {addPostActionCreator, postTextChangeActionCreator} from "../../redux/profileReducer";

const ProfileContainer = (props) => {
    let profileState = props.store.getState().profile;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let postTextChange = (text) => {
        props.store.dispatch(postTextChangeActionCreator(text));
    };

    return (
        <Profile posts={profileState.posts} postText={profileState.postText}
                 addPost={addPost} postTextChange={postTextChange}/>
    )
};

export default ProfileContainer
