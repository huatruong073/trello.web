import axios from 'axios'

const API_GATEWAY = import.meta.env.VITE_API_GATEWAY
const api = axios.create({
    baseURL: API_GATEWAY,
})

// Request interceptor để thêm token vào header
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

// Response interceptor để xử lý lỗi 401 (unauthorized)
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            window.location.href = '/login'
        }
        return Promise.reject(error)
    }
)

export const HttpClient = {
    get: async (url: string) => {
        url = url.startsWith('http') ? url : `${API_GATEWAY}/${url}`
        return await axios.get(url)
    },
    post: async (url: string, data: any) => {
        url = url.startsWith('http') ? url : `${API_GATEWAY}/${url}`
        return await axios.post(url, data)
    },
    put: async (url: string, data: any) => {
        url = url.startsWith('http') ? url : `${API_GATEWAY}/${url}`
        return await axios.put(url, data)
    },
    delete: async (url: string) => {
        url = url.startsWith('http') ? url : `${API_GATEWAY}/${url}`
        return await axios.delete(url)
    },
}
