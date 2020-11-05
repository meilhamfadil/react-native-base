import { combineReducers } from "redux";

export default combineReducers({
    base: require('./BaseReducers').reducer,
    credential: require('./credentialReducer').reducer,
})