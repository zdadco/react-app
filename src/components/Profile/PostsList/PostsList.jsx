import React from "react"
import style from './PostsList.module.css'
import Post from "./Post/Post";

const PostsList = (props) => {
    let posts = props.posts.map(post => <Post post={post}/>);

    return (
        <div className={style.profile_posts_block}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
};

export default PostsList
