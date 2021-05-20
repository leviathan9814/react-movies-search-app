import {createStore, combineReducers} from "redux";
import moviesReducer from "./movies-reducer";

const reducers = combineReducers({
    moviesReducer
})

const store = createStore(reducers);

export default store;