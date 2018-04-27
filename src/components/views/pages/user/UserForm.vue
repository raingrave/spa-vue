<template>
  <div>
    <p>{{ user }}</p>
    <form @submit.prevent.stop="create(user)">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Nome:</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icons-left">
              <input v-model="user.name" name="name" class="input" type="text" placeholder="Digite o nome">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Email:</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icons-left">
              <input v-model="user.email" name="email" class="input" type="text" placeholder="Digite um email">
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Admin:</label>
        </div>
        <div class="field-body">
          <div class="">
            <div class="control has-icons-left">
              <span class="select">
                <select name="admin" v-model="user.admin">
                  <option value="1">Sim</option>
                  <option value="0">Não</option>
                </select>
              </span>
              <span class="icon is-small is-left">
                <i class="fas fa-key"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Senha:</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icons-left">
              <input v-model="user.password" name="password" class="input" type="password" placeholder="Digite uma senha">
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Confirmar:</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-icons-left">
              <input v-model="user.password" name="password" class="input" type="password" placeholder="Confirme a senha">
              <span class="icon is-small is-left">
                <i class="fas fa-check-circle"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <p class="control">
          <button type="submit" class="button is-info">
            Salvar
          </button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'user-form',
  data () {
    return {
      user: {
        name: null,
        email: null,
        admin: 0,
        password: null
      }
    }
  },
  methods: {
    create (user) {
      console.log('create: ', user)
    }
  }
}
</script>
