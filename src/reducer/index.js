import { combineReducers } from "redux";

export default combineReducers({
    base: require('./BaseReducers').reducer,
    movie: require('./movieReducer').reducer,
    credential: require('./credentialReducer').reducer,
})