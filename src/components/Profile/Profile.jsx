import React from "react"
import style from './Profile.module.css'
import PostsList from "./PostsList/PostsList";

const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="" alt="profile background picture"/>
            </div>
            <div>
                <img src="" alt="avatar"/>
                <div>
                    Description
                </div>
            </div>
            <PostsList />
        </div>
    )
}

export default Profile
