import { configureStore } from "@reduxjs/toolkit";
import userReduceer from "./userSlice";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: "root",
    version: 1,
    storage,
};
const reducer = combineReducers({
    user: userReduceer,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const appStore = configureStore( {
    reducer: persistedReducer,
})
export default appStore;