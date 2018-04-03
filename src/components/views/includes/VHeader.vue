<template>
  <header>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">
        <router-link to="admin">
          Studiocred
        </router-link>
      </h5>
      <v-nav/>
      <button v-if="user" @click="unauthenticate()" class="btn btn-outline-primary" href="#">
        Logout
      </button>
      <i>{{ user.name }}</i>
    </div>
  </header>
</template>

<script>
import VNav from '@/components/views/includes/VNav'
import { mapGetters } from 'vuex'

export default {
  name: 'v-header',
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    unauthenticate () {
      this.$store.dispatch('unauthenticate')
      this.$router.push('login')
    }
  },
  components: {
    VNav
  }
}
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 60px;
}

.container-fluid {
  padding: 0;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #f5f5f5;
}
</style>
