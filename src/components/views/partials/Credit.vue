<template>
  <div>
    <span class="cash">
      <i class="fas fa-credit-card fa-1x"></i>
      {{ credit }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'credit',
  props: ['credit']
}
</script>

<style scope>
  .cash {
    color: #FFF;
    font-size: 1.2em;
  }
</style>
