import {addMessageActionCreator, messageTextChangeActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsState.dialogs,
        messages: state.dialogsState.dialogs[0].messages,
        messageText: state.dialogsState.messageText
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        messageTextChange: (text) => {
            dispatch(messageTextChangeActionCreator(text))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);