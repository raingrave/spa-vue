<template>
  <main>
    <transition name="page" mode="out-in">
      <router-view/>
    </transition>
  </main>
</template>

<script>
export default {
  name: 'v-main'
}
</script>

<style>
.page-enter-active, .page-leave-active {
  -webkit-transition: all 200ms ease-in;
  -moz-transition: all 200ms ease-in;
  -ms-transition: all 200ms ease-in;
  -o-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
