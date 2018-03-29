
<template>
  <div>
    <p v-if="text" class="text-center">
      {{ text }}
    </p>
    <p v-if="image" class="text-center">
      <img class="m-4 text-center" :width="size" :src="image">
    </p>
  </div>
</template>

<script>
export default {
  name: 'loader',
  props: {
    text: {
      default: null
    },
    image: {
      default: null
    },
    size: {
      default: 30
    }
  }
}
</script>
