<template>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
            <div class="box">
              <figure class="avatar">
                <img width="120" src="https://www.designfreelogoonline.com/wp-content/uploads/2015/08/000595-eagle-logo-design-free-logos-01.png">
              </figure>
              <form @submit.prevent.stop="authenticate(credentials)">
                <div class="field">
                  <div class="control has-icons-left">
                    <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" v-model="credentials.email" name="email" class="input is-medium" type="text" placeholder="Primary input" autofocus>
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                  <p class="help is-danger has-text-left" v-show="errors.has('email')">
                    {{ errors.first('email') }}
                  </p>
                </div>
                <div class="field">
                  <div class="control has-icons-left">
                    <input v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('password') }" v-model="credentials.password" name="password" class="input is-medium" type="password" placeholder="Digite sua senha">
                    <span class="icon is-small is-left">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <p class="help is-danger has-text-left" v-show="errors.has('password')">
                    {{ errors.first('password') }}
                  </p>
                </div>
                <button :disabled="!credentials.email || !credentials.password" :class="[{ 'is-loading': loaded }, 'button is-block is-info is-medium is-fullwidth']">
                  Entrar
                </button>
                <br>
              </form>
            </div>
            <p class="has-text-grey">
              <a href="#">Sign Up</a> &nbsp;·&nbsp;
              <a href="#">Forgot Password</a> &nbsp;·&nbsp;
              <a href="#">Need Help?</a>
            </p>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'v-login',
  data () {
    return {
      credentials: {
        email: null,
        password: null
      },
      loaded: false
    }
  },
  methods: {
    authenticate (credentials) {
      this.loaded = true
      this.$store.dispatch('authenticate', credentials)
        .then(response => {
          this.loaded = false
          this.$router.push({ name: 'admin' })
        })
        .catch(error => {
          console.log(error)
          this.loaded = false
          this.$toasted.error(error.response.data.errors.message, { icon: 'times' })
        })
    }
  }
}
</script>

<style scope>
.hero.is-success {
  background: #F2F6FA;
}
.hero .nav, .hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatar img {
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
  box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
}
</style>
