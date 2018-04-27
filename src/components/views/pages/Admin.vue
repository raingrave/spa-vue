<template>
  <div class="section">
    <div class="columns">
      <div class="column is-3">
        <router-link :to="{ name: 'admin.users' }">
          <div class="card card-hover">
            <header class="card-header is-error">
              <p class="card-header-title">
                <i class="fas fa-user-circle fa-2x"></i>
                Cadastro de Usuários
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                <p class="is-pulled-right">
                  <i class="fas fa-long-arrow-alt-right fa-3x"></i>
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
      <div class="column is-3">
        <router-link :to="{ name: 'exercito.consultar.idt' }">
          <div class="card card-hover">
            <header class="card-header is-error">
              <p class="card-header-title">
                <i class="fas fa-search fa-2x"></i>
                Consultar IDT
              </p>
            </header>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                <br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                <p class="is-pulled-right">
                  <i class="fas fa-long-arrow-alt-right fa-3x"></i>
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin'
}
</script>

<style>
.card-hover {
  -webkit-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  transition: all 300ms ease;
  background: rgb(245, 245, 245, 0.7);
}

.card-hover:hover {
  cursor: pointer;
  border-left: 4px solid #209CEE;
}
</style>
