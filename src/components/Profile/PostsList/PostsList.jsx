import React from "react"
import style from './PostsList.module.css'
import Post from "./Post/Post";

const PostsList = () => {
    return (
        <div>
            Posts
            <div>
                New post
            </div>
            <div className={style.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default PostsList
