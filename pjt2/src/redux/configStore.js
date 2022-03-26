import { createStore, combineReducers } from "redux";
import words from "./modules/words";

const reducer1 = combineReducers({words});

const store = createStore(reducer1);

export default store;