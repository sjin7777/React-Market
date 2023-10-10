const initialState = {
    userList: [],
    user: {
        userId: '',
        userPwd: ''
    }
}

function User(state = initialState, action) {
    switch(action.type) {
        case 'USER_INSERT':
            return {
                ...state.stateAll,
                userAll: state.userList.concat(action.user)
            }
        default:
            return state;
    }
}

export default User;