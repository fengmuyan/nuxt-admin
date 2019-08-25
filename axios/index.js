/* eslint-disable */
import axios from 'axios'
const env = process.env.NODE_ENV || 'development'
const baseUrl = {
  development: 'http://localhost:3000',
  production: 'http://www.saikang.top'
}
const options = {
  baseURL: baseUrl[env],
  timeout: 8000,
  responseType: 'json',
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
}
const server = axios.create(options);
server.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
server.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  Promise.reject(error)
})

server.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

export function $get(url, params) {
  return new Promise((resolve, reject) => {
    server.get(url, params)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function $post(url, params) {
  return new Promise((resolve, reject) => {
    server.post(url, params)
      .then(res => {
        resolve(res.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default ({
  test(data = {}) {
    return $post('/api/user/getUser', data)
  },
  addUser(data = {}) {
    return $post('/api/user/addUser', data)
  }
})