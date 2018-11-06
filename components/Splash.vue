<template lang="html">
  <section class="py-32 bg-grey-lightest text-navy">
    <div class="container">
      <div class="max-w-xs m-auto text-center">
        <h1 class="leading-tight mt-0 mb-3 f2 fw8">{{ home.splash.title }}</h1>
        <p class="leading-normal ma-0 f4">{{ home.splash.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import home from '~/content/home.json'
export default {
  data() {
    return {
      home
    }
  }
}
</script>

<style lang="css">
</style>
