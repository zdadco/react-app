import React from "react"
import style from './PostsList.module.css'
import Post from "./Post/Post";

class PostsList extends React.Component {

    componentDidMount() {
        this.posts = this.props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>);
        this.postTextEl = React.createRef();
    }

    onAddPost = () => {
        this.props.addPost();
    };

    onPostTextChange = () => {
        this.props.postTextChange(this.postTextEl.current.value);
    };

    render() {
        return (
            <div className={style.profile_posts_block}>
                <h3>Posts</h3>
                <div>
                    <div>
                    <textarea ref={this.postTextEl}
                              value={this.props.postText}
                              onChange={this.onPostTextChange}
                    />
                    </div>
                    <div>
                        <button onClick={this.onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={style.posts}>
                    {this.posts}
                </div>
            </div>
        )
    }

}

export default PostsList
