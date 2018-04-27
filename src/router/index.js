import Vue from 'vue'
import Router from 'vue-router'
import BeforeEach from './beforeEach'
import Index from '@/components/views/pages/Index'
import Login from '@/components/views/pages/auth/Login'
import Admin from '@/components/views/pages/Admin'
import Exercito from '@/components/views/pages/Exercito'
import User from '@/components/views/pages/user/User'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        isAuthenticated: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        isAuthenticated: false
      }
    },
    {
      path: '/administracao',
      name: 'admin',
      component: Admin,
      meta: {
        isAuthenticated: true
      }
    },
    {
      path: '/administracao/usuarios',
      component: User,
      name: 'admin.users',
      meta: {
        isAuthenticated: true
      }
    },
    {
      path: '/exercito/consultar/idt',
      name: 'exercito.consultar.idt',
      component: Exercito,
      meta: {
        isAuthenticated: true
      }
    }
  ]
})

router.beforeEach(BeforeEach)

export default router
