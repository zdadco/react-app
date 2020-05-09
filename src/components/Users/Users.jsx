import React from "react";
import style from "./Users.module.css";
import avatar from "../../asserts/avatar.jpg";
import {NavLink} from "react-router-dom";
import UsersApi from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount ; i++) {
        if (i > 5) {
            break;
        }
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p =>
                        <span
                            key={p}
                            className={ props.currentPage === p ? style.selectedPage : undefined }
                            onClick={ () => props.onPageChange(p) }
                        >{ p }</span>
                    )
                }
            </div>
            {
                props.users.map(user =>
                    <div key={user.id} className={style.userBlock}>
                        <div className={style.avatarBlock}>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img className={style.avatar}
                                         src={ user.photos.small != null ? user.photos.small : avatar}
                                         alt="User avatar"/>
                                </NavLink>
                            </div>
                            <div>
                                {
                                    user.followed ? <button onClick={() => {
                                           UsersApi.unfollow(user.id).then(data =>  {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(user.id);

                                                }
                                            });
                                        }}>Unfollow</button> : <button onClick={() => {
                                            UsersApi.follow(user.id).then(data =>  {
                                                if (data.resultCode === 0) {
                                                    props.follow(user.id);

                                                }
                                            });
                                        }}>Follow</button>
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

export default Users;