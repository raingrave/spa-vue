<template>
  <div class="navbar-item has-dropdown is-hoverable">
    <a class="navbar-link">
      {{ user.name }}
    </a>
    <div class="navbar-dropdown is-right">
      <a class="navbar-item" href="#">
        <span class="icon">
          <i class="fas fa-user"></i>
        </span>
        Meus dados
      </a>
      <hr class="navbar-divider">
      <a @click.prevent.stop="logout()" class="navbar-item" href="#">
        <span class="icon">
          <i class="fas fa-sign-out-alt"></i>
        </span>
        Sair
      </a>
    </div>
   </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'logout',
  props: ['user'],
  methods: {
    ...mapActions(['unauthenticate']),
    logout () {
      this.unauthenticate()
        .then(() => {
          this.$router.push({ name: 'login' })
        })
        .catch(error => {
          this.$toasted.error(error.message, { icon: 'times' })
        })
    }
  }
}
</script>
