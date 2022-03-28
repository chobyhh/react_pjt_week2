import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import words from "./modules/words";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const reducer1 = combineReducers({words});

const store = createStore(reducer1, enhancer);

export default store;