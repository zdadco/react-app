import React from "react"
import style from './PostsList.module.css'
import Post from "./Post/Post";

const PostsList = (props) => {
    let posts = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>);
    let postTextEl = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };
    let onPostTextChange = () => {
        props.postTextChange(postTextEl.current.value);
    };

    return (
        <div className={style.profile_posts_block}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea ref={postTextEl}
                              value={props.postText}
                              onChange={onPostTextChange}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
};

export default PostsList
