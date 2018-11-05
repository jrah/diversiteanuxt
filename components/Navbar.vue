<template>

  <div class="absolute pin w-full">
    <div class="container relative z-20 py-4 flex items-center justify-between">
      <img
        src="~assets/images/logo.svg"
        class="w-32 text-white"
        alt="Logo">

      <div
        class="text-white ns:hidden db navMenu-toggle"
        @click="openNav()">
        <no-ssr>
          <v-icon
            name="bars"
            scale="2"
            class="block"/>
        </no-ssr>
      </div>

      <nav
        :class="{ isOpen: isOpen }"
        class="navMenu--top">
        <!-- <span @click="closeNav(click)" class="pointer z-4">Close</span> -->
        <a
          v-for="(item, index) in site.nav"
          :v-if="item !== null"
          :key="`nav-${index}`"
          :href="item.href"
          :class="'navMenu--top-item ns:inline block no-underline font-bold mr2-ns align-middle'">
          <div class="ns:hidden inline align-middle">
            <no-ssr>
              <v-icon
                name="home"
                scale="1.5"/>
            </no-ssr>
          </div>
          <span class="inline">{{ item.text }}</span>
        </a>
      </nav>

    </div>
  </div>

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

    &:hover {
      cursor: pointer;
    }
  }
}
</style>
