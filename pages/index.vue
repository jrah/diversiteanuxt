<template>
  <section class="h-screen bg-navy flex items-center justify-center">

    <nuxt-link
      to="/form"
      class="no-underline text-white text-3xl">Click for Form Page</nuxt-link>

  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
</style>
