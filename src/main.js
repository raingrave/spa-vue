// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VeeValidate, { Validator } from 'vee-validate'
import ptBR from 'vee-validate/dist/locale/pt_BR'
import VueTheMask from 'vue-the-mask'
import Toasted from 'vue-toasted'
import configVeeValidade from './config/veeValidate'
import configVueToasted from './config/vueToasted'
import VueClipboard from 'vue-clipboard2'
import '../node_modules/bulma/css/bulma.css'
import fontawesome from 'vue-fontawesome-css'
Vue.use(fontawesome)
Vue.use(VueTheMask)
Vue.use(VueClipboard)
Vue.use(Toasted, configVueToasted)
Vue.use(VeeValidate, configVeeValidade)
Validator.localize('pt_BR', ptBR)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  fontawesome,
  components: { App },
  template: '<App/>'
})
