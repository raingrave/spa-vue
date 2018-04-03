<template>
  <div class="col mt-5">
    <form @submit.prevent.stop="authenticate(credentials)" class="form-signin">
      <h1 class="h3 mb-3 text-center">Entrar</h1>
      <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" v-model="credentials.email" name="email" type="text" class="form-control" placeholder="Digite seu email" autofocus>
      <p class="text-danger text-left m-2" v-show="errors.has('email')">
        {{ errors.first('email') }}
      </p>
      <input v-validate="'required'" v-model="credentials.password" name="password" type="password" class="form-control" placeholder="Digite sua senha">
      <p class="text-danger text-left m-2" v-show="errors.has('password')">
        {{ errors.first('password') }}
      </p>
      <button :disabled="disabled" class="btn btn-lg btn-primary btn-block" type="submit">
        Entrar
      </button>
      <loader v-if="show" size="20" image="http://boldfishvideo.com/wp-content/uploads/2014/06/preloader.gif" />
    </form>
  </div>
</template>

<script>
import Loader from '@/components/views/partials/Loader'

export default {
  name: 'v-login',
  data () {
    return {
      credentials: {
        email: null,
        password: null
      },
      show: false,
      disabled: false
    }
  },
  components: {
    Loader
  },
  methods: {
    authenticate (credentials) {
      this.show = true
      this.disabled = true
      this.$store.dispatch('authenticate', credentials).then(response => {
        this.show = false
        this.disabled = false
        this.$router.push('admin')
      }, error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scope>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
