import thunk from 'redux-thunk'

import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import moviesReducer from './moviesReducer'

const configureStore = () => createStore(
    combineReducers({
        employee: moviesReducer
    }),
    applyMiddleware(thunk)
);

export default configureStore;
