import Remote from './remote'

export default {
    getMovie: async () => {
        const response = await Remote.getMovie()
        return response.data
    }
}