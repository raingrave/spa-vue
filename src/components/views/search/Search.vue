<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Buscar cliente
      </p>
    </header>
    <div class="card-content">
      <form @submit.prevent.stop="findByType(search)">
        <div class="content">
          <p>961454008</p>
          <div class="has-icons-left has-icons-right">
            <div class="field has-addons">
              <p class="control">
                <span class="select">
                  <select v-model="search.type">
                    <option value="idt">Idt</option>
                  </select>
                </span>
              </p>
              <div class="control is-expanded has-icons-right">
                <input v-mask="defaultMask" v-validate="'required|min:9'" :class="{'input': true, 'is-danger': errors.has('busca') }" v-model="search.keyword" name="keyword" class="input" type="text" placeholder="Buscar">
                <span class="icon is-small is-right">
                  <i class="fas fa-search"></i>
                </span>
                <p class="help is-danger has-text-left" v-show="errors.has('keyword')">
                  {{ errors.first('keyword') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <button :disabled="errors.has('keyword')" :class="[{ 'is-loading': loaded }, 'button is-link is-fullwidth']" type="submit">
            Buscar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { clearMask } from '@/helpers/string'

export default {
  name: 'search',
  data () {
    return {
      loaded: false,
      search: {
        type: 'idt',
        keyword: null
      }
    }
  },
  computed: {
    defaultMask () {
      return this.search.type === 'cliente' || this.search.type === 'emprestimos' ? '###.###.###-##' : '#########'
    }
  },
  methods: {
    findByType (search) {
      this.loaded = true
      if (search.type === 'cliente') {
        this.$store.dispatch('getClienteFromCpf', clearMask(search.keyword))
          .then(() => {
            this.loaded = false
          })
          .catch(error => {
            this.$toasted.error(error.response.data.errors.message, { icon: 'times' })
            this.loaded = false
          })
      }

      if (search.type === 'emprestimos') {
        this.$store.dispatch('getClienteEmprestimosFromCpf', clearMask(search.keyword))
          .then(() => {
            this.loaded = false
          })
          .catch(error => {
            this.$toasted.error(error.response.data.errors.message, { icon: 'times' })
            this.loaded = false
          })
      }

      if (search.type === 'idt') {
        this.$store.dispatch('getClienteIdtFromPrec', search.keyword)
          .then(() => {
            this.loaded = false
          })
          .catch(error => {
            this.$toasted.error(error.response.data.errors.message, { icon: 'times' })
            this.loaded = false
          })
      }
    }
  }
}
</script>
