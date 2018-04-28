import axios from 'axios'
import localforage from 'localforage'

const baseUrl = `${process.env.API_URL}/v1`
const tokenKey = 'MY_APP_TOKEN'

const storeToken = token => {
  axios.defaults.headers.common['Authorization'] = `bearer ${token}`
  return localforage.setItem('token', token)
    .then(() => token)
}

const clearToken = () => {
  axios.defaults.headers.common['Authorization'] = null
  return localforage.setItem(tokenKey, null)
}

const authenticate = credentials => {
  return axios.post(`${baseUrl}/autenticar`, credentials)
    .then(({ data }) => {
      return data.access_token
    })
    .then(storeToken)
}

const loadUser = () => {
  return axios.post(`${baseUrl}/user`)
    .then(({ data }) => data)
}

export default {
  authenticate,
  loadUser,
  clearToken
}
