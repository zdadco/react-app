import {addPostActionCreator, postTextChangeActionCreator} from "../../../redux/profileReducer";
import PostsList from "./PostsList";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profileState.posts,
        postText: state.profileState.postText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        postTextChange: (text) => {
            dispatch(postTextChangeActionCreator(text));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (PostsList);
