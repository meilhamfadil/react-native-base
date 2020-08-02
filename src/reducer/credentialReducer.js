import { createReducer, createActions } from 'reduxsauce'

// Initial State
const INITIAL_STATE = {
    token: null,
    check: false,
    stored: false
}

// Cases
const setCurrentToken = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        check: true,
        token: action.token
    }
}

const tokenStored = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        stored: action.status
    }
}

// Action
const { Types, Creators } = createActions({
    setCurrentToken: ['token'],
    getSavedToken: null,
    storeToken: ['token'],
    tokenStored: ['status']
})

// Handlers
const HANDLERS = {
    [Types.STORE_TOKEN]: null,
    [Types.TOKEN_STORED]: tokenStored,
    [Types.SET_CURRENT_TOKEN]: setCurrentToken,
    [Types.GET_SAVED_TOKEN]: null,
}

// Export
export const reducer = createReducer(INITIAL_STATE, HANDLERS)
export const CredentialTypes = Types
export default Creators