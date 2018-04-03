import AuthService from '@/services/AuthService'
import { isEmpty } from 'lodash'
import localforage from 'localforage'

const authenticate = (context, credentials) => {
  return AuthService.authenticate(credentials).then(response => {
    let token = response.data.access_token
    context.commit('SET_TOKEN', token)
    AuthService.createTokenInStorage(token)
    return response
  })
}

const unauthenticate = (context, token) => {
  localforage.setItem('token', null)
  context.commit('SET_TOKEN', null)
  context.commit('SET_USER', null)
  return Promise.resolve()
}

const checkUserToken = (context) => {
  if (!isEmpty(context.state.token)) {
    return Promise.resolve(context.state.token)
  }

  localforage.getItem('token').then(token => {
    if (isEmpty(token)) {
      return Promise.reject(new Error('TOKEN_NOT_FOUND'))
    }
    return context.commit('SET_TOKEN', token)
  }).then(() => context.dispatch('getUserFromToken', context.state.token))
}

const getUserFromToken = (context, token) => {
  return AuthService.getUserFromToken(token).then(user => {
    context.commit('SET_USER', user.data.data)
    return user
  })
}

export default {
  authenticate,
  unauthenticate,
  checkUserToken,
  getUserFromToken
}
