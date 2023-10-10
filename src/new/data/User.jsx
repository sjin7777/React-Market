import { useDispatch } from "react-redux";
// import UserList from "./UserList";

const initialState = {
    user: {
        id: 0,
        userId: '',
        userPwd: ''
    },
    userList: []
}

function User (state = initialState, action) {
    const dispatch = useDispatch();
    switch(action.type) {
        case 'USER_INSERT':
            return {
                user: {
                    userId: action.userId,
                    userPwd: action.userPwd
                }
            }
        default:
            return state;
    }
}

export default User;