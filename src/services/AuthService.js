import axios from 'axios'

const Auth = {
  authenticate (credentials) {
    return axios.post(`${process.env.API_URL}/v1/autenticar`, credentials).then(response => {
      return response
    })
  },
  createTokenInStorage (token) {
    localStorage.setItem('token', token)
  },
  getUserFromToken (token) {
    axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    return axios.post(`${process.env.API_URL}/v1/user`).then(response => {
      return response
    })
  },
  unauthenticate (token, invalidate = false) {
    localStorage.clear()
    if (invalidate) {
      axios.defaults.headers.common['Authorization'] = `bearer ${token}`
      return axios.post(`${process.env.API_URL}/v1/invalidar`)
    }
  }
}

export default Auth
