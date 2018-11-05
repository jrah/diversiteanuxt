<template>
  <div>
    <app-navbar/>
    <nuxt/>
    <app-footer/>
  </div>
</template>

<script>
import appNavbar from '~/components/Navbar.vue'
import appFooter from '~/components/Footer.vue'

export default {
  components: {
    appFooter,
    appNavbar
  }
}
</script>

<style lang="scss">
@import '~assets/scss/mixins';
html {
  @apply font-sans font-normal text-black leading-normal;
}

.container {
  @apply px-8;
  @include mq(ns) {
    @apply px-16;
  }
  @extend %mwc;
}
</style>
