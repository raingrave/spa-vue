import AuthService from '@/services/AuthService'
import { isEmpty } from 'lodash'
import localforage from 'localforage'

const authenticate = (context, credentials) => {
  return AuthService.authenticate(credentials)
    .then(response => {
      let token = response.data.access_token
      AuthService.createTokenInStorage(token)
      context.commit('SET_TOKEN', token)
      context.dispatch('getUserFromToken')
    })
}

const unauthenticate = (context) => {
  localforage.setItem('token', null)
  context.commit('SET_TOKEN', null)
  context.commit('SET_USER', null)
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
  .then(user => context.commit('SET_USER', user.data.data))
  .catch(() => {
    context.commit('SET_TOKEN', null)
    return Promise.reject(new Error('user not loaded'))
  })

export default {
  authenticate,
  unauthenticate,
  checkUserToken,
  getUserFromToken
}
