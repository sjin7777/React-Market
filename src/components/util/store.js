import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import User from "../data/User";
import Token from "./token";
import Product from "../data/Product";
import Cart from "../data/Cart";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
    User,
    Token,
    Product,
    Cart
})

const persistConfig =  {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const middleware = [logger]

function configureStore() {
    const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));

    const persistor = persistStore(store);
    
    return { store, persistor }
}

export default configureStore;