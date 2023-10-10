import { legacy_createStore as createStore, combineReducers } from "redux";
import User from "./data/User";
// import UserList from "./data/UserList";

const rootReducer = combineReducers({
    // UserList,
    User
})

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;