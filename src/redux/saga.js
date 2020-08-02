import { all, takeLatest } from 'redux-saga/effects'

import { MovieTypes } from '../reducer/movieReducer'
import { getMovie } from '../saga/movieSaga'
import Api from '../source/remote'

const api = Api.create()

export default function* root() {
    yield all([
        takeLatest(MovieTypes.MOVIES_REQUEST, getMovie, api)
    ])
}