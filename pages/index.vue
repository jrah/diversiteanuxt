<template>
  <div class="content">
    <app-header/>
    <section>
      <div class="container py-10 text-navy">
        <h1 class="text-center mb-12 text-4xl">Heading</h1>
        <div class="m:flex l:flex justify-around">
          <div class="text-center ns:w-1/4">
            <no-ssr>
              <v-icon
                name="brands/angellist"
                scale="3"
                class="ma-3 text-navy"
              />
            </no-ssr>
            <h2 class="leading-tight text-lg mt-1 mb-1">{{ home.splash.title }}</h2>
            <p class="leading-normal mt-0 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore!</p>
          </div>
          <div class="text-center ns:w-1/4">
            <no-ssr>
              <v-icon
                name="air-freshener"
                scale="3"
                class="ma-3 text-navy"
              />
            </no-ssr>
            <h2 class="leading-tight  text-lg mt-1 mb-1">{{ home.splash.title }}</h2>
            <p class="leading-normal mt-0 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore!</p>
          </div>
          <div class="text-center ns:w-1/4">
            <no-ssr>
              <v-icon
                name="brands/vuejs"
                scale="3"
                class="ma-3 text-navy"
              />
            </no-ssr>
            <h2 class="leading-tight text-lg mt-1 mb-1">{{ home.splash.title }}</h2>
            <p class="leading-normal mt-0 mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, inventore!</p>
          </div>
        </div>
      </div>
    </section>

    <splash/>

    <section class="container text-black ns:flex justify-between">
      <div class="ns:border-grey-lightest ns:border-solid ns:border-r-4 pt-10 pr-12 ns:mr-12">
        <no-ssr>
          <v-icon
            name="book"
            scale="4"
            class="ma-3 text-navy" />
        </no-ssr>
        <h1 class="leading-tight mt-2 mb-4 text-lg font-bold text-navy">Tea Dictionary</h1>
        <p class="leading-normal ma-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum assumenda, dolores rerum voluptates. A, veritatis iure harum. Voluptate nulla nisi incidunt quisquam at magni dignissimos.</p>
        <a
          href="#"
          class="inline-block my-3 font-bold text-sm text-navy hover:text-navy-lighter no-underline">Open our tea dictionary<no-ssr><v-icon
            name="arrow-right"
            class="ma-3 align-text-bottom mx-2" /></no-ssr></a>
      </div>
      <div class="pt-10">
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
import splash from '~/components/Splash.vue'

export default {
  components: {
    appHeader,
    splash
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
