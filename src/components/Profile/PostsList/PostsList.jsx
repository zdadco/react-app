import React from "react"
import style from './PostsList.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const PostsList = (props) => {
    let posts = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>);
    let newPostEl = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    function onNewPostElChange() {
        props.dispatch(updateNewPostTextActionCreator(newPostEl.current.value));
    }

    return (
        <div className={style.profile_posts_block}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostEl}
                              value={props.newPostText}
                              onChange={onNewPostElChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
};

export default PostsList
