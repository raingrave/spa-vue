const user = ({ user }) => {
  delete user.id
  delete user.access_ip
  delete user.created_at
  delete user.updated_at
  delete user.deleted_at
  delete user.admin
  delete user.status

  return user
}

export default {
  user
}
