import { legacy_createStore as createStore, combineReducers } from "redux";
import User from './components/data/User';


// const rootReducer = combineReducers({
//     User
// });


const store = createStore(User, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;