import { call, put } from "redux-saga/effects"
import MovieTypes from '../reducer/movieReducer'

export function* getMovie(api, action) {
    const response = yield call(api.getMovie)

    if (response.code == 0) {
        yield put(MovieTypes.moviesSuccess(response.data))
    } else {
        yield put(MovieTypes.moviesFailure(response.message))
    }
}