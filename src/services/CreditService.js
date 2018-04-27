import axios from 'axios'

const CreditService = {
  getUserCredit (id) {
    return axios.get(`${process.env.API_URL}/v1/creditos/${id}`)
  }
}

export default CreditService
