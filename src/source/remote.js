import apisauce from 'apisauce'

const create = () => {
    // Initialize Api
    const api = apisauce.create({
        baseURL: "https://meilhamfadil.github.io",
        headers: {
            "Application-Type": "application/json"
        }
    })

    // Endpoint
    const getMovie = () => api.get("movies-failure.json").then(intepreter)

    // Export
    return {
        getMovie
    }
}


const intepreter = (response) => {
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