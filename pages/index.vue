<template>
  <div class="content">
    <app-header/>
    <section>
      <div class="container py-10 text-navy">
        <h1 class="text-center mb-12 text-4xl">{{ home.features.title }}</h1>
        <div class="m:flex l:flex justify-around">

          <div
            v-for="(block, index) in home.features.block"
            :key="index"
            :name=" '' + index "
            class="text-center ns:w-1/4">
            <img
              :src="require('~/assets/images/'+ block.icon+'.svg')"
              alt="block.icon"
            >
            <h2 class="leading-tight text-lg mt-1 mb-1">{{ block.heading }}</h2>
            <p class="leading-normal mt-0 mb-6">{{ block.paragraph }}</p>
          </div>

        </div>
      </div>
    </section>

    <splash/>

    <section class="container text-black ns:flex justify-between">
      <div class="ns:border-grey-lightest ns:border-solid ns:border-r-4 pt-10 ns:py-10 ns:pr-12 ns:mr-12">
        <img
          :src="require('~/assets/images/'+ home.options.dictionary.icon+'.svg')"
          alt="block.icon"
        >
        <h1 class="leading-tight mt-2 mb-4 text-lg font-bold text-navy">{{ home.options.dictionary.heading }}</h1>
        <p class="leading-normal ma-0">{{ home.options.dictionary.paragraph }}</p>
        <!-- <a
          href="http://teadictinary.diversitea.co"
          class="inline-block my-3 font-bold text-sm text-navy hover:text-navy-lighter no-underline">Open our tea dictionary<no-ssr><v-icon
            name="arrow-right"
            class="ma-3 align-text-bottom mx-2" /></no-ssr></a> -->
        <span class="inline-block my-3 font-bold text-sm text-grey no-underline">Coming Soon</span>
      </div>
      <div class="py-10">
        <img
          :src="require('~/assets/images/'+ home.options.quiz.icon+'.svg')"
          alt="block.icon"
        >
        <h1 class="leading-tight mt-2 mb-4 text-lg font-bold text-navy">{{ home.options.quiz.heading }}</h1>
        <p class="leading-normal ma-0 f4">{{ home.options.quiz.paragraph }}</p>
        <span class="inline-block my-3 font-bold text-sm text-grey no-underline">Coming Soon</span>
      </div>
    </section>
    <section class="container py-10 bg-grey-lightest">
      <h1 class="text-center text-4xl mb-12">{{ home.collaborations.title }}</h1>
      <ul class="flex list-reset justify-around flex-wrap">
        <li
          v-for="(org, index) in home.collaborations.organisation"
          :key="index">
          <a :href="org.href">
            <img
              :src="org.image"
              :alt="org.name">
          </a>
        </li>
      </ul>
    </section>
    <section class="p-24">
      <carousel
        :auto-play="true"
        :navigation-click-target-size="20"
        :per-page="1">

        <slide
          v-for="(testimonial, index) in home.testimonial"
          :key="index"
          class="p-3">
          <figure class="text-center">
            <blockquote class="italic font-normal text-2xl mb-3 text-grey-darker">
              <no-ssr>
                <v-icon
                  name="quote-left"
                  scale="2"
                  class="m-3 text-grey-dark"
                />
              </no-ssr>
              {{ testimonial.quote }}
              <no-ssr>
                <v-icon
                  name="quote-right"
                  scale="2"
                  class="m-3 text-grey-dark"
                />
              </no-ssr>
            </blockquote>
            <figcaption class="uppercase">— <cite class="author font-bold text-small">{{ testimonial.author }}</cite></figcaption>
          </figure>
        </slide>

      </carousel>
    </section>
  </div>
</template>

<script>
import home from '~/content/home.json'
import appHeader from '~/components/Header.vue'
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
