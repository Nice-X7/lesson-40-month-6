import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import { thunk }  from "redux-thunk";
import { albums } from "./albums/albums"
import { users } from "./users/users"

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootState = combineReducers({
    users: users,
    albums: albums, 
})

export const store = createStore(rootState, applyMiddleware(thunk, logger))