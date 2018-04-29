<template>
  <header>
    <nav class="navbar header is-grey">
      <div class="navbar-brand">
        <router-link :to="{ name: 'admin' }" class="navbar-item logo">
          Studiocred
        </router-link>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <credit v-if="credit" :credit="credit" />
          </div>
        </div>
        <div class="navbar-end">
          <logout v-if="user" :user="user" />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import VNav from '@/components/views/includes/VNav'
import Logout from '@/components/views/pages/auth/Logout.vue'
import Credit from '@/components/views/partials/Credit'
import { mapGetters } from 'vuex'
export default {
  name: 'v-header',
  computed: {
    ...mapGetters(['user', 'credit'])
  },
  components: {
    VNav,
    Logout,
    Credit
  }
}
</script>

<style>
  .logo {
    font-size: 1.2em;
  }
  .is-grey {
    background: #666666;
  }
  .is-grey a {
  }
</style>
