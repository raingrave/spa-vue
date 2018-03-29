import AuthService from '@/services/AuthService'

const authenticate = (context, credentials) => {
  AuthService.authenticate(credentials).then(response => {
    let token = response.data.access_token
    context.commit('SET_TOKEN', token)
    AuthService.createTokenInStorage(token)
    context.commit('SET_IS_LOGGED', true)
    context.commit('SET_USER', context.dispatch('getUserFromToken', response.data.access_token))
  })
}

const unauthenticate = (context, token) => {
  AuthService.unauthenticate(token)
  context.commit('SET_TOKEN', null)
  context.commit('SET_IS_LOGGED', false)
  context.commit('SET_USER', null)
}

const getUserFromToken = (context, token) => {
  AuthService.getUserFromToken(token).then(response => {
    context.commit('SET_USER', response.data.data)
  })
}

export default {
  authenticate,
  unauthenticate,
  getUserFromToken
}
