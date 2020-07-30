const { create } = require("apisauce")

const baseUrl = "https://meilhamfadil.github.io"

const api = create({
    baseURL: baseUrl,
    headers: {
        "Application-Type": "application/json"
    }
})

const getMovie = () => api.get("movies.json")

export default {
    getMovie: getMovie
}