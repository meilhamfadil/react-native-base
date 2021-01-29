import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
    users: null,
    globalError: null
})

const onUsersLoaded = (state = INITIAL_STATE, action) => state.merge({
    users: action.payload
})

const alertError = (state = INITIAL_STATE, action) => state.merge({
    globalError: action.message
})

const { Types, Creators } = createActions({
    onLoadUsers: ['payload'],
    onErrorDetected: ['message']
})

export const Action = {
    onLoadUsers: Creators.onLoadUsers,
    onErrorDetected: Creators.onErrorDetected
}

export default createReducer(INITIAL_STATE, {
    [Types.ON_LOAD_USERS]: onUsersLoaded,
    [Types.ON_ERROR_DETECTED]: alertError
})