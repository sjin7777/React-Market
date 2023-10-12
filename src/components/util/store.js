import { legacy_createStore as createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import User from "../data/User";
import Token from "./token";

const reducers = combineReducers({
    User,
    Token
})

const persistConfig =  {
    key: "root",
    storage,
    // whitelist: ["user, userList", "result", "token", "isToken"],
}

const persistedReducer = persistReducer(persistConfig, reducers)


function configureStore() {
    const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    const persistor = persistStore(store);
    
    return { store, persistor }
}

export default configureStore;