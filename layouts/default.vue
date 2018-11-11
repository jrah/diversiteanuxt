<template>
  <div class="site-canvas">
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

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-raleway;
}

p,
blockquote,
nav,
button,
a {
  @apply font-roboto;
}

.container {
  @apply px-8;
  @include mq(ns) {
    @apply px-16;
  }
  @extend %mwc;
}
.site-canvas {
  @apply bg-white;
  transition: 0.3s ease transform;
  position: relative;
  overflow: hidden;
}

.link {
  @include mq(ns) {
    &:after {
      content: '';
      @apply bg-navy;
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      opacity: 0;
      transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out,
        -webkit-transform 0.4s ease-in-out;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
}
</style>
