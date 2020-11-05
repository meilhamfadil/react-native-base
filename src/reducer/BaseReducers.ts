import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Initial State
const INITIAL_STATE = Immutable({
    isRequesting: false,
    isBusy: false,
    isPhoneConnected: false
})

// Cases
export const setBusy = (state = INITIAL_STATE, action: any) => state.merge({
    isBusy: action.value
})

export const setRequesting = (state = INITIAL_STATE, action: any) => state.merge({
    isRequesting: action.value
})

export const setPhoneConnection = (state = INITIAL_STATE, action: any) => state.merge({
    isPhoneConnected: action.value
})

// Action
const { Types, Creators } = createActions({
    setBusy: ['value'],
    setRequesting: ['value'],
    setPhoneConnection: ['value']
})

// Handlers
const HANDLERS = {
    [Types.SET_BUSY]: setBusy,
    [Types.SET_REQUESTING]: setRequesting,
    [Types.SET_PHONE_CONNECTION]: setPhoneConnection
}

// Export
export const reducer = createReducer(INITIAL_STATE, HANDLERS)
export const BaseTypes = Types
export default {
    setBusy: Creators.setBusy,
    setRequesting: Creators.setRequesting,
    setPhoneConnection: Creators.setPhoneConnection
}