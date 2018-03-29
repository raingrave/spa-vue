import Vue from 'vue'
import Router from 'vue-router'
import BeforeEach from './beforeEach'
import Index from '@/components/views/pages/Index'
import Login from '@/components/views/auth/Login'
import Admin from '@/components/views/pages/Admin'
import Exercito from '@/components/views/pages/Exercito'
Vue.use(Router)
const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/exercito',
      name: 'exercito',
      component: Exercito
    }
  ]
})

router.beforeEach(BeforeEach)

export default router