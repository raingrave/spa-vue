<template>
  <div class="section">
    <div class="columns">
      <div v-show="true" class="column is-4">
        <user-form />
      </div>
      <div class="column">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ativo</th>
              <th>Criado Em</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td v-if="user.status">
                <span class="tag is-success">Ativo</span>
              </td>
              <td v-else>
                <span class="tag is-danger">Inativo</span>
              </td>
              <td>{{ user.created_at | format('DD/MM/YYYY') }}</td>
              <td class="actions">
                <a class="icon is-small">
                  <i class="fas fa-search"></i>
                </a>
                <a class="icon is-small">
                  <i class="fas fa-pencil-alt"></i>
                </a>
                <a class="icon is-small">
                  <i class="fas fa-trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nav class="pagination" role="navigation" aria-label="pagination">
          <a class="pagination-previous" title="This is the first page" disabled>Previous</a>
          <a class="pagination-next">Next page</a>
          <ul class="pagination-list">
            <li>
              <a class="pagination-link is-current" aria-label="Page 1" aria-current="page">1</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 2">2</a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 3">3</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from '@/components/views/pages/user/UserForm'
import { mapGetters } from 'vuex'
import moment from 'moment'

export default {
  name: 'user',
  mounted () {
    this.$store.dispatch('getAllUsers')
  },
  computed: {
    ...mapGetters(['users'])
  },
  filters: {
    format (value, format) {
      return moment(value).format(format)
    }
  },
  components: {
    UserForm
  }
}
</script>

<style scope>
  .actions a {
    padding: 0 10px;
  }
</style>
