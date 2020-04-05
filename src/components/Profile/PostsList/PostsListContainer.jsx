import React from "react"
import {addPostActionCreator, postTextChangeActionCreator} from "../../../redux/profileReducer";
import PostsList from "./PostsList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profile.posts,
        postText: state.profile.postText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        postTextChange: (text) => {
            dispatch(postTextChangeActionCreator(text));
        }
    }
};

const PostsListContainer = connect(mapStateToProps, mapDispatchToProps)(PostsList);

export default PostsListContainer
