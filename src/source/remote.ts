import apisauce from 'apisauce'
import Config from 'react-native-config'

const create = () => {
    // Initialize Api
    const api = apisauce.create({
        baseURL: Config.API_URL,
        headers: {
            "Application-Type": "application/json"
        }
    })

    // Endpoint
    const getMovie = () => api.get("movies.json").then(intepreter)

    // Export
    return {
        getMovie
    }
}


const intepreter = (response: any) => {
    if (response.ok) {
        return response.data
    } else {
        return {
            code: 1,
            message: response.problem
        }
    }
}

export default {
    create
}