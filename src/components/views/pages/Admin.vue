<template>
  <div class="row mb-2">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body d-flex flex-column align-items-start">
          <strong class="d-inline-block mb-2 text-primary">
            Exército
          </strong>
          <h3 class="mb-0">
              Consultar Exército
          </h3>
          <div class="mb-1 text-muted">
            Atualizado em Nov 12
          </div>
          <p class="card-text mb-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'administracao'
}
</script>

<style>
.card {
  transition: all 200ms;
  background: rgb(220, 220, 220, 0.7);
}

.card:hover {
  cursor: pointer;
  border-left: 8px solid #3e9bff !important;
}
</style>
