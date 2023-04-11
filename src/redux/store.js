import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage';
import reducers from "./reducers";
let configPersist = {
    key:'root',
    storage
}
const persistor = persistReducer(configPersist,reducers)
export default configureStore({reducer:persistor,middleware:[thunk,logger]});