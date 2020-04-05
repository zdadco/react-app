import React from "react"
import {addPostActionCreator, postTextChangeActionCreator} from "../../../redux/profileReducer";
import PostsList from "./PostsList";

const PostsListContainer = (props) => {
    let profileState = props.store.getState().profile;
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let postTextChange = (text) => {
        props.store.dispatch(postTextChangeActionCreator(text));
    };

    return (
        <PostsList posts={profileState.posts} postText={profileState.postText}
                   addPost={addPost} postTextChange={postTextChange}/>
    )
};

export default PostsListContainer
