import { toMoney } from '@/helpers/number'

const user = ({ user }) => {
  return user
}

const users = ({ users }) => {
  return users
}

const credit = ({ credit }) => {
  return credit > 0 ? toMoney(credit) : 0
}

export default {
  user,
  credit,
  users
}
