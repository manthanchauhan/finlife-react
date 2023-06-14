import axios from "axios"

// https://semaphoreci.com/blog/api-layer-react

export const api = axios.create({
    baseURL: "http://localhost:8081"
});

const errorHandler = (error) => {
    return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})