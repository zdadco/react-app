import React from "react"
import style from './Post.module.css'
import avatar from '../../../../asserts/avatar.jpg'

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src={avatar} alt="avatar"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
};

export default Post
