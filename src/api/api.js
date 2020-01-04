import axios from 'axios'
//1: Hung
//2: Khang

export const host_1 = "https://shiba-rest-server.herokuapp.com"
export const host_2= "https://erestaurant-userbe.herokuapp.com"
export const host_image = "https://shiba-rest-server.herokuapp.com"

export const host_api_1 = `${host_1}/v1/`
export const host_api_2 = `${host_2}/v1/`

const instance_1 = axios.create({
    baseURL: host_api_1
})

const instance_2= axios.create({
    baseURL: host_api_2
})

export const api_1 = {
    get: (url, params) => {
        return instance_1.get(`${url}`, params)
    },
    post: (url, data, config ) => {
        return instance_1.post(`${url}`, data, config)
    }
}
export const api_2 = {
    get: (url, params) => {
        return instance_2.get(`${url}`, params)
    },
    post: (url, data, config) => {
        return instance_2.post(`${url}`, data, config)
    }
}