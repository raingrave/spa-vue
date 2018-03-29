const SET_TOKEN = (state, token) => {
  state.token = token
}

const SET_IS_LOGGED = (state, status) => {
  state.isLogged = status
}

const SET_USER = (state, user) => {
  state.user = user
}

export default {
  SET_TOKEN,
  SET_IS_LOGGED,
  SET_USER
}
