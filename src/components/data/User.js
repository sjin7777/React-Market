const initialState = {
    userList: [
        {
            userKey: 0,
            userId: 'admin',
            userPwd: '1234',

        },
    ],
    user: {
        userKey: 0,
        userId: '',
        userPwd: ''
    },
    result: false
}

export const UserJoin = (userId, userPwd) => ({
    type: 'USER_JOIN',
    user: {
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

export const UserIdCk = (userId, result) => ({
    type: 'USER_ID_CK',
    user: {
        userId
    },
    result
})


export const UserCk = (userId, userPwd, result) => ({
    type: 'USER_CK',
    user: {
        userId,
        userPwd
    },
    result
})




function User(state = initialState, action) {
    console.log(state.userList.length)
    switch(action.type) {
        case 'USER_JOIN':
            return {
                ...state,
                userKey: state.userList.length + 1,
                userId: action.userId,
                userPwd: action.userPwd,
                userList: state.userList.concat(Object.assign({userKey: state.userList.length + 1}, action.user))
            }

        case 'USER_ID_CK':
            return {
                ...state,
                result: (state.userList.findIndex((user) => (user.userId === action.user.userId)) > -1)
            }

        case 'USER_CK':
            return {
                ...state,
                result: (state.userList.findIndex((user) => (user.userId === action.user.userId) && (user.userPwd === action.user.userPwd)) > -1)
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