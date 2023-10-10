const initialState = {
    userList: [
        {
            id:0,
            userId: 'admin',
            userPwd: '1234',
        }
    ],
    user: {
        id: 0,
        userId: '',
        userPwd: ''
    },
    // msg: ''
}

let id = 1;
export const UserJoin = (userId, userPwd) => {
    return {
        type: 'USER_JOIN',
        user: {
            id: id++,
            userId,
            userPwd
        }
    }
}

export const UserLogin = (userId, userPwd) => {
    return {
        type: 'USER_LOGIN',
        user: {
            userId,
            userPwd,
        }
    }
}

export const UserIdCk = (userId) => {
    return {
        type: 'USER_ID_CK',
        user: {
            userId
        }
    }
}


export const UserCk = (userId, userPwd) => {
    return {
        type: 'USER_CK',
        user: {
            userId,
            userPwd
        }
    }
}

function User(state = initialState, action) {
    // console.log(state.userList);
    const storeUserList = state.userList;

    switch(action.type) {
        case 'USER_JOIN':
            console.log(storeUserList);
            return {
                ...state,
                user: action.user,
                userList: storeUserList.concat(action.user),
                msg: ''
            }

        case 'USER_ID_CK':
            return {
                ...state,
            }
        case 'USER_CK':
            // console.log(state);
            // console.log(storeUserList);
            state.userList.forEach(user => {
                console.log(user);
                if(user.id === action.user.id  && user.userId === action.user.userId) {
                    if(user.userPwd === action.user.userPwd) {
                        return state.msg = 'success';
                    } else {
                        return state.msg = 'fail_pwd'
                    }
                } else {
                    return state.msg = 'fail_id'
                }
            })
            console.log(state.msg);
            return {
                ...state,
                user: action.user,
                msg: state.msg
            }
        case 'USER_LOGIN':
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}

export default User;