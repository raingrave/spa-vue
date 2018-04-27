const SET_TOKEN = (state, token) => {
  state.token = token
}

const SET_USER = (state, user) => {
  state.user = user
}

const SET_USERS = (state, users) => {
  state.users = users
}

const SET_RESULT = (state, result) => {
  state.result = result
}

const SET_CREDIT = (state, credit) => {
  state.credit = credit
}

export default {
  SET_TOKEN,
  SET_USER,
  SET_USERS,
  SET_RESULT,
  SET_CREDIT
}
