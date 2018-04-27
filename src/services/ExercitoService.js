import axios from 'axios'

const ExercitoService = {
  getClienteFromCpf (cpf) {
    return axios.get(`${process.env.API_URL}/v1/exercito/cliente/${cpf}`)
  },
  getClienteEmprestimosFromCpf (cpf) {
    return axios.get(`${process.env.API_URL}/v1/exercito/emprestimos/${cpf}`)
  },
  getClienteIdtFromPrec (prec) {
    return axios.get(`${process.env.API_URL}/v1/exercito/idt/${prec}`)
  }
}

export default ExercitoService
