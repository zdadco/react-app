import React from "react";
import style from "./Users.module.css";
import avatar from "../../asserts/avatar.jpg";
import * as axios from "axios";

class Users extends React.Component {

    updateUsers = () => {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.updateUsers(response.data.items));
    };

    render() {
        return (
            <div>
                {
                    this.props.users.map(user =>
                        <div key={user.id} className={style.userBlock}>
                            <div className={style.avatarBlock}>
                                <div>
                                    <img className={style.avatar}
                                         src={ user.photos.small != null ? user.photos.small : avatar}
                                         alt="User avatar"/>
                                </div>
                                <div>
                                    {
                                        user.followed
                                            ? <button onClick={() => this.props.changeFollowStatus(user.id)}>Unfollow</button>
                                            : <button onClick={() => this.props.changeFollowStatus(user.id)}>Follow</button>
                                    }
                                </div>
                            </div>
                            <div className={style.infoBlock}>
                                <div className={style.personInfo}>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </div>
                                <div className={style.personLocation}>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Users;