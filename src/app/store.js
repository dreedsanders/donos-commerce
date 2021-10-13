import { createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers, applyMiddleware } from "redux";
import userReducer from "../reducers/userReducer";
import itemReducer from "../reducers/itemReducer";


const rootReducer = combineReducers({
    userState: userReducer,
    itemState: itemReducer
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(thunk))
);

export default store 