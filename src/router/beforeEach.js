import store from '@/store'

const beforeEach = (to, from, next) => {
  if (!to.meta.isAuthenticated) {
    next()
    return
  }

  store.dispatch('checkUserToken').then(response => {
    next()
  }).catch(error => {
    next('login')
  })
}

export default beforeEach
