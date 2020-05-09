import React from "react"
import wall from '../../../asserts/wallpaper.jpg'
import defaultAvatar from '../../../asserts/avatar.jpg'
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let contacts = Object.entries(props.profile.contacts)
        .filter(entry => {
            if (entry[1]) {
                return entry;
            }
        })
        .map(entry => ({ type: entry[0], link: entry[1] }))
        .map(contact => {
            return (
                <div key={contact.type}>{contact.type} : {contact.link}</div>
            )
        });

    let avatar = props.profile.photos.large ? props.profile.photos.large : defaultAvatar;

    return (
        <div className={style.profile_info_block}>
            <div>
                <img src={wall} alt="profile background"/>
            </div>
            <div className={style.description}>
                <img src={avatar} alt="avatar"/>
                <div className={style.about}>
                    {props.profile.aboutMe}
                </div>
                <div className={style.contacts}>
                    {contacts}
                </div>
            </div>
        </div>
    )

};

export default ProfileInfo
