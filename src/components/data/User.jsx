
const USER_INSERT = 'USER_INSERT';
const USER_SELECT = 'USER_SELECT';
// const USER_ID_CHECK = 'USER_IDCHECK';
// const USER_MODIFY = 'USER_MODIFY';
// const USER_DELETE = 'USER_DELETE';

let id = 1;

const initialState= {
    userAll: [],
    user: {
        id: 0,
        userId: '',
        userPwd: ''
    }
}

export const userInsert = (userId, userPwd) => ({
    type: USER_INSERT,
    user: {
        id: id++,
        userId,
        userPwd,
    }
});

export const userSelect = (userId, userPwd) => ({
    type: USER_SELECT,
    user: {
        userId,
        userPwd,
    }
});


function User (state = initialState, action) {
    switch(action.type) {
        case USER_INSERT:
            return {
                ...state,
                userAll: state.userAll.concat(action.user)
            };
        case USER_SELECT:
            // console.log(state.user.userId)
            return {
                // user: state.userAll.map((user) => 
                //     (user.userId === action.user.userId) ? user : ""
                // )
            }
        default:
            return state;
    }
}

export default User;