import apisauce from 'apisauce'

const api = apisauce.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: { "Application-Type": "application/json" }
})

// Endpoint
export const getUsers = () => api.get("/users")