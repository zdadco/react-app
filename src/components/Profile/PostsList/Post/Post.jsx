import React from "react"
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src="" alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post
