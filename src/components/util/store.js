import { legacy_createStore as createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import User from "../data/User";
import persistStore from "redux-persist/es/persistStore";

const reducers = combineReducers({
    User
})

const persistConfig =  {
    key: "root",
    storage,
    whitelist: ["User, UserList", "msg"],
}

const persistedReducer = persistReducer(persistConfig, reducers)


function configureStore() {
    const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

    const persistor = persistStore(store);
    
    return { store, persistor}
}

export default configureStore;