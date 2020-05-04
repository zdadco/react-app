import React from "react"
import style from './Post.module.css'
import avatar from '../../../../asserts/avatar.jpg'

class Post extends React.Component {

    render() {
        return (
            <div className={style.post}>
                <img src={avatar} alt="avatar"/>
                {this.props.message}
                <div>
                    <span>like</span> {this.props.likesCount}
                </div>
            </div>
        )
    }

}

export default Post
