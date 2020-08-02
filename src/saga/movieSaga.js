import { call, put } from "redux-saga/effects"
import BaseTypes from '../reducer/baseReducer'
import MovieTypes from '../reducer/movieReducer'

function* getMovie(api, action) {
    yield put(BaseTypes.setRequesting(true))
    const response = yield call(api.getMovie)
    yield put(BaseTypes.setRequesting(false))

    if (response.code == 0) {
        yield put(MovieTypes.moviesSuccess(response.data))
    } else {
        yield put(MovieTypes.moviesFailure(response.message))
    }
}

export default {
    getMovie
}