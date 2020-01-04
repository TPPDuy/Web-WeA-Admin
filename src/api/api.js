import axios from 'axios'
import { getJwtFromStorage, mergeConfig } from "../utils/utils";
//1: Hung
//2: Khang

export const host_1 = "https://shiba-rest-server.herokuapp.com"
export const host_2= "https://erestaurant-userbe.herokuapp.com"
export const host_image = "https://shiba-rest-server.herokuapp.com"

export const host_api_1 = `${host_1}/v1/`
export const host_api_2 = `${host_2}/v1/`
const auth_type = "Bearer";

const instance_1 = axios.create({
    baseURL: host_api_1
})

const instance_2= axios.create({
    baseURL: host_api_2
})

export const api_1 = {
    get: (url, params) => {
        let jwt = getJwtFromStorage()
        if(jwt !== "" && jwt !== null){
            jwt = auth_type + " " + jwt
        }
        else{
            jwt = ""
        }
        return instance_1.get(`${url}`, 
            mergeConfig(params, {
                headers: {
                    Authorization: jwt
                }
            }))
    },
    post: (url, data, config ) => {
        let jwt = getJwtFromStorage()
        if(jwt !== "" && jwt !== null){
            jwt = auth_type + " " + jwt
        }
        else{
            jwt = ""
        }
        return instance_1.post(`${url}`, data,  
            mergeConfig(config, {
                headers: {
                    Authorization: jwt
                }
            }))
    }
}
export const api_2 = {
    get: (url, params) => {
        let jwt = getJwtFromStorage()
        if(jwt !== "" && jwt !== null){
            jwt = auth_type + " " + jwt
        }
        else{
            jwt = ""
        }
        return instance_2.get(`${url}`, 
            mergeConfig(params, {
                headers: {
                    Authorization: jwt
                }
            }))
    },
    post: (url, data, config) => {
        let jwt = getJwtFromStorage()
        if(jwt !== "" && jwt !== null){
            jwt = auth_type + " " + jwt
        }
        else{
            jwt = ""
        }
        return instance_2.post(`${url}`, data,  
            mergeConfig(config, {
                headers: {
                    Authorization: jwt
                }
            }))
    }
}