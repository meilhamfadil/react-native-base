import { createReducer, createActions } from 'reduxsauce'

// Initial State
const INITIAL_STATE = {
    busy: false,
    requesting: false
}

// Cases
const setBusy = (state = INITIAL_STATE, action) => {
    return state.merge({ busy: action.busy })
}

const setRequesting = (state = INITIAL_STATE, action) => {
    return state.merge({ requesting: action.requesting })
}

// Action
const { Types, Creators } = createActions({
    setBusy: ['busy'],
    setRequesting: ['requesting'],
})

// Handlers
const HANDLERS = {
    [Types.SET_BUSY]: setBusy,
    [Types.SET_REQUESTING]: setRequesting,
}

// Export
export const reducer = createReducer(INITIAL_STATE, HANDLERS)
export const BaseTypes = Types
export default Creators