import React from "react"
import style from './PostsList.module.css'
import Post from "./Post/Post";

const PostsList = (props) => {
    let posts = props.posts.map(post => <Post key={post.id} post={post}/>);

    let addPost = () => {
        props.events.addPost();
    };

    function onNewPostElChange() {
        let text = props.newPostText;
        props.events.updateNewPostText(text);
    }

    return (
        <div className={style.profile_posts_block}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
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
