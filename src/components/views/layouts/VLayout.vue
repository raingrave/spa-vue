<template>
    <div>
      <v-header/>
      <v-main/>
      <v-footer/>
    </div>
</template>

<script>
import VHeader from '@/components/views/includes/VHeader'
import VMain from '@/components/views/includes/VMain'
import VFooter from '@/components/views/includes/VFooter'
export default {
  name: 'layout',
  components: {
    VHeader,
    VMain,
    VFooter
  }
}
</script>

<style>
.svg-inline--fa {
  margin-right: 6px;
}
</style>
