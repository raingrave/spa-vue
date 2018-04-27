import AuthService from '@/services/AuthService'
import UserService from '@/services/UserService'
import ExercitoService from '@/services/ExercitoService'
import CreditService from '@/services/CreditService'
import { isEmpty } from 'lodash'
import localforage from 'localforage'

const authenticate = (context, credentials) => {
  return AuthService.authenticate(credentials)
    .then(response => {
      let token = response.data.access_token
      AuthService.createTokenInStorage(token)
      context.commit('SET_TOKEN', token)
      context.dispatch('getUserFromToken')
      return response
    })
}

const unauthenticate = (context) => {
  localforage.setItem('token', null)
  context.commit('SET_TOKEN', null)
  context.commit('SET_USER', null)

  if (!isEmpty(context.state.token) && !isEmpty(context.state.user)) {
    return Promise.reject(new Error('falha ao deslogar'))
  }

  return Promise.resolve(true)
}

const checkUserToken = (context) => {
  if (!isEmpty(context.state.token)) {
    return Promise.resolve(context.state.token)
  }

  return localforage.getItem('token')
    .then(token => {
      if (isEmpty(token)) {
        return Promise.reject(new Error('token not exists'))
      }
      context.commit('SET_TOKEN', token)
    })
    .then(() => context.dispatch('getUserFromToken'))
}

const getUserFromToken = (context) => AuthService.getUserFromToken(context.state.token)
  .then(user => {
    context.commit('SET_USER', user.data.data)
  })
  .catch(() => {
    context.commit('SET_TOKEN', null)
    return Promise.reject(new Error('user not loaded'))
  })

const getClienteFromCpf = (context, cpf) => {
  return ExercitoService.getClienteFromCpf(cpf).then(client => {
    context.commit('SET_RESULT', client.data.result)
    return Promise.resolve(client)
  })
}

const getClienteEmprestimosFromCpf = (context, cpf) => {
  return ExercitoService.getClienteEmprestimosFromCpf(cpf).then(emprestimos => {
    context.commit('SET_RESULT', emprestimos.data.result)
    return Promise.resolve(emprestimos)
  })
}

const getClienteIdtFromPrec = (context, prec) => {
  return ExercitoService.getClienteIdtFromPrec(prec).then(idt => {
    context.commit('SET_RESULT', idt.data.result)
    return Promise.resolve(idt)
  })
}

const getAllUsers = (context) => {
  return UserService.getAll().then(users => {
    context.commit('SET_USERS', users.data.result)
    return Promise.resolve(users)
  })
}

const getUserCredit = (context, id) => {
  return CreditService.getUserCredit(id).then(credit => {
    context.commit('SET_CREDIT', credit.data.result)
    return Promise.resolve(credit)
  })
}

export default {
  authenticate,
  unauthenticate,
  checkUserToken,
  getUserFromToken,
  getClienteFromCpf,
  getClienteEmprestimosFromCpf,
  getClienteIdtFromPrec,
  getAllUsers,
  getUserCredit
}
