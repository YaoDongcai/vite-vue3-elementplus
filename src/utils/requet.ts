import axios, { AxiosInstance } from 'axios';

const service: AxiosInstance = axios.create({
    timeout: 5000
})
// 拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject();
})

// 
service.interceptors.response.use(response => {
    if(response.status === 200) {
        return response
    }
    Promise.reject()

}, error => {
    return Promise.reject();
})
export default service;