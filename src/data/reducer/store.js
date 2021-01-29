import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

export default createStore(
    combineReducers({
        example: require('./ExampleReducer').default
    }),
    applyMiddleware(thunk)
);