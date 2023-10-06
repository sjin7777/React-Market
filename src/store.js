import { legacy_createStore as createStore } from "redux";

const initialState = {
    user: [],
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'USER-ADD':
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
} 

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;