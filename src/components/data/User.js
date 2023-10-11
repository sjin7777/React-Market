const initialState = {
    userList: [
        {
            id:0,
            userId: 'admin',
            userPwd: '1234',

        },
    ],
    user: {
        id: 0,
        userId: '',
        userPwd: ''
    },
    msg: ''
}

let id = 1;
export const UserJoin = (userId, userPwd) => ({
    type: 'USER_JOIN',
    user: {
        id: id++,
        userId,
        userPwd
    }
})

export const UserLogin = (userId, userPwd) => ({
    type: 'USER_LOGIN',
    user: {
        userId,
        userPwd,
    }
})

export const UserIdCk = (userId) => ({
    type: 'USER_ID_CK',
    user: {
        userId
    }
})


export const UserCk = (userId, userPwd) => ({
    type: 'USER_CK',
    user: {
        userId,
        userPwd
    }
})

function User(state = initialState, action) {
    switch(action.type) {
        case 'USER_JOIN':
            console.log(state.userList);
            return {
                ...state,
                user: action.user,
                userList: state.userList.concat(action.user),
                msg: ''
            }

        case 'USER_ID_CK':
            return {
                ...state,
            }

        case 'USER_CK':
            console.log(state.userList);
            return {
                ...state,
                user: action.user,
                msg: state.userList.map(user => {
                    state.msg = '';
                    if(user.userId === action.user.userId) {
                        state.msg = (user.userPwd === action.user.userPwd) ? 'success' : 'fail_pwd';
                    } else {
                        state.msg = 'fail_id'
                    }
                    return state.msg
                })
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