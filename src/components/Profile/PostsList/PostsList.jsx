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
                <Post message="It's my blog" likesCount='0'/>
                <Post message='Hello world!!' likesCount='23'/>
            </div>
        </div>
    )
}

export default PostsList
