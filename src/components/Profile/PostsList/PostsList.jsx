import React from "react"
import style from './PostsList.module.css'
import Post from "./Post/Post";

const PostsList = (props) => {
    let posts = props.posts.map(post => <Post key={post.id} post={post}/>);

    let newPostEl = React.createRef();

    let addPost = () => {
        let text = newPostEl.current.value;
        alert(text);
    };

    return (
        <div className={style.profile_posts_block}>
            <h3>Posts</h3>
            <div>
                <div>
                    <textarea ref={ newPostEl }/>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {posts}
            </div>
        </div>
    )
};

export default PostsList
