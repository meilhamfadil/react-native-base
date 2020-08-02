import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';

import rootReducer from '../reducer'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const enhancers = [
    applyMiddleware(sagaMiddleware)
]

const store = createStore(
    rootReducer,
    compose(...enhancers)
);

sagaMiddleware.run(saga)

export default store;
