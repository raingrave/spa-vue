import axios from 'axios'
import localforage from 'localforage'

const Auth = {
  authenticate (credentials) {
    return axios.post(`${process.env.API_URL}/v1/autenticar`, credentials)
      .then(token => {
        return token
      })
  },
  unauthenticate (token) {
    return Promise.resolve(token)
  },
  createTokenInStorage (token) {
    return localforage.setItem('token', token)
  },
  getUserFromToken (token) {
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    return axios.post(`${process.env.API_URL}/v1/user`)
      .then(user => {
        return user
      })
  }
}

export default Auth
