import { legacy_createStore as createStore, combineReducers } from "redux";
import User from "./data/User";

const reducer = combineReducers({
    User
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;