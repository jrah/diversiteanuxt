<template>
  <div class="content">
    <app-header/>
    <section class="container py-32 bg-grey-lightest text-navy">
      <div class="max-w-xs m-auto text-center">
        <h1 class="leading-tight mt-0 mb-3 f2 fw8">{{ home.splash.title }}</h1>
        <p class="leading-normal ma-0 f4">{{ home.splash.text }}</p>
      </div>
    </section>
    <section class="container text-black flex justify-between">
      <div class="border-grey-lightest border-solid border-r-4 py-10 pr-6 mr-12">
        <no-ssr>
          <v-icon
            name="book"
            scale="4"
            class="ma-3 text-navy" />
        </no-ssr>
        <h1 class="leading-tight mt-2 mb-4 text-lg font-bold text-navy">Tea Dictionary</h1>
        <p class="leading-normal ma-0 f4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum assumenda, dolores rerum voluptates. A, veritatis iure harum. Voluptate nulla nisi incidunt quisquam at magni dignissimos.</p>
        <a
          href="#"
          class="inline-block my-3 font-bold text-sm text-navy hover:text-navy-lighter no-underline">Open our tea dictionary<no-ssr><v-icon
            name="arrow-right"
            class="ma-3 align-text-bottom mx-2" /></no-ssr></a>
      </div>
      <div class="py-10">
        <no-ssr>
          <v-icon
            name="book"
            scale="4"
            class="ma-3 text-navy"
            transform="shrink-6 left-4"
          />
        </no-ssr>
        <h1 class="leading-tight mt-2 mb-4 text-lg font-bold text-navy">Tea Quiz</h1>
        <p class="leading-normal ma-0 f4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum assumenda, dolores rerum voluptates. A, veritatis iure harum. Voluptate nulla nisi incidunt quisquam at magni dignissimos.</p>
        <a
          href="#"
          class="inline-block my-3 font-bold text-sm text-navy hover:text-navy-lighter no-underline">Take our tea quiz<no-ssr><v-icon
            name="arrow-right"
            class="ma-3 align-text-bottom mx-2" /></no-ssr></a>
      </div>
    </section>
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
