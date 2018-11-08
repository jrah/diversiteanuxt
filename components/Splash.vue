<template lang="html">
  <section class="py-12 bg-grey-lightest text-navy">
    <div class="container">
      <div class="max-w-md m-auto text-center">
        <h1 class="mt-0 mb-2 font-bold text-4xl leading-tight">{{ home.splash.title }}</h1>
        <p class="leading-normal mt-0">{{ home.splash.text }}</p>
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
