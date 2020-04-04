import React from "react"
import wall from '../../../asserts/wallpaper.jpg'
import avatar from '../../../asserts/avatar.jpg'
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={style.profile_info_block}>
            <div>
                <img src={wall} alt="profile background"/>
            </div>
            <div className={style.description}>
                <img src={avatar} alt="avatar"/>
                <div>
                    Description
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo
