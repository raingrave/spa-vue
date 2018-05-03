<template>
  <div v-if="results" class="card">
    <header class="card-header">
      <p class="card-header-title">
        Resultado da pesquisa
      </p>
      <a @click="closed()" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-times fa-1x" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div v-for="(result, type) in results" :key="result.id" class="columns is-multiline blue-line">
        <hr>
        <div v-for="(input, key) in result" :key="input.id" class="column is-4">
          <span :class="['tag', { 'is-success': type == 'novo' }, { 'is-warning': type == 'antigo' }]">
            {{ type }}
          </span>
          <div class="field has-addons">
            <div class="field-label is-normal">
              <label class="label is-capitalized">
                {{ key }}
              </label>
            </div>
            <p class="control">
              <input :value="input" class="input" type="text" readonly>
            </p>
            <p class="control">
              <a v-clipboard:copy="input" v-clipboard:success="onCopy" v-clipboard:error="onError" class="button is-info">
                <i class="fas fa-copy"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'result',
  data () {
    return {
      inputValue: null
    }
  },
  computed: {
    ...mapGetters(['results'])
  },
  methods: {
    onCopy: function (event) {
      this.$toasted.success('Copiado!', { icon: 'copy' })
    },
    onError: function (event) {
      this.$toasted.error('Erro ao copiar!', { icon: 'copy' })
    },
    closed () {
      this.$store.state.results = null
    }
  }
}
</script>

<style scope>
  .blue-line {
    border-bottom: 2px solid #209CEE;
  }
</style>
