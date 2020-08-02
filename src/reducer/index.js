import { combineReducers } from "redux";

export default combineReducers({
    base: require('./baseReducer').reducer,
    movie: require('./movieReducer').reducer,
    credential: require('./credentialReducer').reducer,
})