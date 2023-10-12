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
    result: false
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
    switch(action.type) {
        case 'USER_JOIN':
            return {
                ...state,
                user: action.user,
                userList: state.userList.concat(action.user)
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