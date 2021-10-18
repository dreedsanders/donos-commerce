import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist' // imports from redux-persist
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import userReducer from "../reducers/userReducer";
import itemReducer from "../reducers/itemReducer";

const persistConfig = {
  // configuration object for redux-persist
  key: "root",
  storage, // define which storage to use
};

const rootReducer = combineReducers({
  userState: userReducer,
  itemState: itemReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export {store, persistor}