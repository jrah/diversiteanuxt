<template>
  <div>
    <nuxt/>
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
  @apply px-4;
  @include mq(ns) {
    @apply px-5;
  }
  @extend %mwc;
}
</style>
