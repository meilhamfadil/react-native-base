import { createActions } from 'reduxsauce'

const { Creators } = createActions({
    moviesSuccess: ['payload'],
    moviesFailure: ['error']
})

export default Creators
