import store from '@/store'

const beforeEach = (to, from, next) => {
  if (!to.meta.isAuthenticated) {
    next()
    return
  }

  store.dispatch('checkUserToken').then(() => {
    next()
  }).catch(() => {
    next('login')
  })
}

export default beforeEach
