let isToken = false;
const TokenInitialState = {
    token: {
        userId: '',
        userPwd: '',
    }, 
    isToken
}

export const SetToken = (userId, userPwd, isToken) => ({
    type: 'SET_TOKEN',
    token: {
        userId,
        userPwd
    },
    isToken
})

export const RemoveToken = (isToken) => ({
    type: 'REMOVE_TOKEN',
    isToken
})

function Token (state = TokenInitialState, action) {
    switch(action.type) {
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
                isToken: action.isToken
            }
        case 'REMOVE_TOKEN':
            return {
                isToken: action.isToken
            }
        default:
            return state;
    }
}

export default Token;