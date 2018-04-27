import axios from 'axios'

const UserService = {
  getAll () {
    return axios.get(`${process.env.API_URL}/v1/users`)
  },
  create (user) {
    return axios.post(`${process.env.API_URL}/v1/users`, user)
  }
}

export default UserService
