<template>
  <div class="content">
    <app-header/>
  </div>
</template>

<script>
import home from '~/content/home.json'
import appHeader from '~/components/header.vue'

export default {
  components: {
    appHeader
  },
  data() {
    return {
      home
    }
  }
}
</script>

<style scoped lang="scss">
</style>
