import React from "react"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsListContainer from "./PostsList/PostsListContainer";

class Profile extends React.Component {

    render() {
        return (
            <div>
                <ProfileInfo/>
                <PostsListContainer/>
            </div>
        )
    }

}

export default Profile
