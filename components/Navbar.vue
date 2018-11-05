<template>

  <div>Navbar</div>

</template>

<script>
import site from '~/content/site.json'
export default {
  data() {
    return {
      site,
      isOpen: false
    }
  },
  methods: {
    closeNav() {},
    openNav() {
      this.isOpen = !this.isOpen
      let siteCanvas = document.querySelector('#__nuxt')
      siteCanvas.classList.toggle('is-offcanvas')
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/mixins';

// not scoped due to site-canvas on main
.site-canvas {
  transition: 300ms ease transform;
  @apply bg-white;
  position: relative;
  overflow: hidden;
}
.is-offcanvas {
  // overflow: hidden;
  @apply bg-white;
  .site-canvas {
    transform: translateX(-60%);
    position: inherit;
    overflow: initial;
  }
}
.navMenu {
  &--top {
    @include mq(ns) {
      // resets nav position on larger screen width devices
      position: relative;
      top: auto;
      right: auto;
      width: auto;
      box-shadow: 0;
    }
    width: 60%;
    height: 100%;
    position: absolute;
    top: 0.5em;
    right: -60%;

    &-item {
      @include mq(ns) {
        font-size: 1em;
        display: inline-block;
        padding: 0;
        border: 0;
        @apply text-white;
        margin: 0 0.5rem;
        &:hover {
          @apply text-grey-lightest;
        }
      }
      @apply text-navy;
      padding: 1rem 0;
      margin: 0 1rem;
      // @apply border-solid border-grey-lightest border-b-1;
      font-size: 1.25em;
      &:hover {
        @apply text-red;
      }
    }
  }

  &-toggle {
    @include mq(ns) {
      display: none;
    }
    z-index: 1;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
