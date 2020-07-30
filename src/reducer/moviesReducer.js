import Types from '../types'
import { createReducer } from 'reduxsauce'

const INITIAL_STATE = {
    list: [],
    error: null
}

const onSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        list: action.payload,
        error: null
    }
}

const onFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        list: [],
        error: action.error
    }
}

const HANDLERS = {
    [Types.MOVIES_SUCCESS]: onSuccess,
    [Types.MOVIES_FAILURE]: onFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)