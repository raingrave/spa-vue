import AuthService from '@/services/AuthService'
import { isEmpty } from 'lodash'

const authenticate = (context, credentials) => {
  return AuthService.authenticate(credentials).then(response => {
    let token = response.data.access_token
    context.commit('SET_TOKEN', token)
    AuthService.createTokenInStorage(token)
    return response
  })
}

const unauthenticate = (context, token) => {
  AuthService.unauthenticate(token)
  context.commit('SET_TOKEN', null)
  context.commit('SET_USER', null)
  return Promise.resolve()
}

const checkUserToken = (context) => {
  if (!isEmpty(context.state.token)) {
    return Promise.resolve(context.state.token)
  }
  return Promise.reject('TOKEN_NOT_FOUND')
}

const getUserFromToken = (context, token) => {
  return AuthService.getUserFromToken(token).then(response => {
    context.commit('SET_USER', response.data.data)
    return response
  })
}

export default {
  authenticate,
  unauthenticate,
  checkUserToken,
  getUserFromToken
}
