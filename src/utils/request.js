import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'utils/camelCase'

const service = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 15000
})

const OAUTH_TOKEN = 'd7dc966328824bec15d2146fbeb3cce3d57fa2ff'

service.interceptors.request.use(config => {
  config.params = decamelizeKeys(config.params)

  config.headers['Authorization'] = `token ${OAUTH_TOKEN}`
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    const data = response.data
    return camelizeKeys(data)
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          return Promise.reject(error)
        case 422:
          return Promise.reject(error)
        case 500:
          return Promise.reject(error)
        default:
          return Promise.reject(error)
      }
    } else {
      return Promise.reject(error)
    }
  }
)

export default service
