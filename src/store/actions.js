import AuthService from '@/services/AuthService'
import UserService from '@/services/UserService'
import ExercitoService from '@/services/ExercitoService'
import CreditService from '@/services/CreditService'
import { isEmpty } from 'lodash'
import localforage from 'localforage'
import axios from 'axios'

const authenticate = (context, credentials) => {
  return AuthService.authenticate(credentials)
    .then(token => {
      context.commit('SET_TOKEN', token)
      context.dispatch('loadUser')
      return token
    })
}

const unauthenticate = (context) => {
  localforage.removeItem('token')
  context.commit('SET_TOKEN', null)
  context.commit('SET_USER', null)
  context.commit('SET_CREDIT', null)

  if (!isEmpty(context.state.token) && !isEmpty(context.state.user)) {
    return Promise.reject(new Error('falha ao deslogar'))
  }

  return Promise.resolve(true)
}

const checkUserToken = (context) => {
  let token = context.state.token
  if (!isEmpty(token)) {
    return Promise.resolve(token)
  }
  return localforage.getItem('token')
    .then(token => {
      if (isEmpty(token)) {
        return Promise.reject(new Error('token not exists'))
      }
      axios.defaults.headers.common['Authorization'] = `bearer ${token}`
      context.commit('SET_TOKEN', token)
    })
    .then(() => context.dispatch('loadUser'))
}

const loadUser = (context) => AuthService.loadUser()
  .then(({ data }) => {
    context.commit('SET_USER', data)
    return context.dispatch('loadUserCredit')
      .then(() => data)
      .catch(error => {
        return Promise(Error(error))
      })
  })
  .catch(() => {
    context.commit('SET_TOKEN', null)
    console.log(new Error('user not loaded'))
    return Promise.reject(new Error('user not loaded'))
  })

const getClienteFromCpf = (context, cpf) => {
  return ExercitoService.getClienteFromCpf(cpf).then(client => {
    context.commit('SET_RESULTS', client.data.result)
    return Promise.resolve(client)
  })
}

const getClienteEmprestimosFromCpf = (context, cpf) => {
  return ExercitoService.getClienteEmprestimosFromCpf(cpf).then(emprestimos => {
    context.commit('SET_RESULTS', emprestimos.data.result)
    return Promise.resolve(emprestimos)
  })
}

const getClienteIdtFromPrec = (context, prec) => {
  return ExercitoService.getClienteIdtFromPrec(prec).then(idt => {
    context.commit('SET_RESULTS', idt.data.result)
    return Promise.resolve(idt)
  })
}

const getAllUsers = (context) => {
  return UserService.getAll().then(users => {
    context.commit('SET_USERS', users.data.result)
    return Promise.resolve(users)
  })
}

const loadUserCredit = (context) => {
  const id = context.state.user.id

  if (!id) {
    return Promise.reject(new Error('no current user'))
  }

  return CreditService.getUserCredit(id)
    .then(({ data }) => {
      const credit = data.result.creditoAtual
      context.commit('SET_CREDIT', credit)
      return Promise.resolve(credit)
    })
}

export default {
  authenticate,
  unauthenticate,
  checkUserToken,
  loadUser,
  getClienteFromCpf,
  getClienteEmprestimosFromCpf,
  getClienteIdtFromPrec,
  getAllUsers,
  loadUserCredit
}
