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
            <div class="w-24 m-auto">
              <img
                :src="require('~/assets/images/'+ block.icon+'.svg')"
                alt="block.icon"
              >
            </div>
            <h2 class="leading-tight text-lg mt-1 mb-1">{{ block.heading }}</h2>
            <p class="leading-normal mt-0 mb-6">{{ block.paragraph }}</p>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-grey-lightest text-navy">
      <div class="container pt-12 bg-grey-lightest text-navy">
        <div class="max-w-md m-auto text-center">
          <h1 class="mt-0 mb-2 font-bold text-4xl leading-tight">{{ home.splash.title }}</h1>
          <p class="leading-normal mt-0">{{ home.splash.text }}</p>
        </div>
      </div>
    </section>

    <section
      :style="{'background-image': 'url(' + require('~/assets/images/bg.svg') + ')'}"
      class="bg-grey-lightest text-black l:bg-contain bg-cover py-12 bg-no-repeat bg-center">
      <div class="container l:flex justify-between">
        <div class="bg-white p-10 mx-2 l:mb-0 mb-3 border-grey-lighter border-solid border-2 rounded-sm shadow">
          <div class="w-32">
            <img
              :src="require('~/assets/images/'+home.options.dictionary.icon+'.svg')"
              alt="block.icon"
            >
          </div>
          <h1 class="leading-tight mt-2 mb-4 text-lg font-bold text-navy">{{ home.options.dictionary.heading }}</h1>
          <p class="leading-normal ma-0">{{ home.options.dictionary.paragraph }}</p>
          <!-- <a
            href="http://teadictinary.diversitea.co"
            class="inline-block my-3 font-bold text-sm text-navy hover:text-navy-lighter no-underline">Open our tea dictionary<no-ssr><v-icon
              name="arrow-right"
              class="ma-3 align-text-bottom mx-2" /></no-ssr></a> -->
          <span class="inline-block my-3 font-bold text-sm text-grey no-underline">Coming Soon</span>
        </div>

        <div class="bg-white p-10 mx-2 border-grey-lighter border-solid border-2 rounded-sm shadow">
          <div class="w-32">
            <img
              :src="require('~/assets/images/'+home.options.quiz.icon+'.svg')"
              alt="block.icon"
            >
          </div>
          <h1 class="leading-tight mt-2 mb-4 text-lg font-bold text-navy">{{ home.options.quiz.heading }}</h1>
          <p class="leading-normal ma-0 f4">{{ home.options.quiz.paragraph }}</p>
          <span class="inline-block my-3 font-bold text-sm text-grey no-underline">Coming Soon</span>
        </div>
      </div>

    </section>

    <section class="py-10 bg-grey-lightest">
      <div class="container">
        <h1 class="text-center text-4xl mb-12">{{ home.collaborations.title }}</h1>
        <ul class="flex list-reset ns:justify-around justify-center flex-wrap items-center">
          <li
            v-for="(org, index) in home.collaborations.organisation"
            :key="index"
            class="w-48 m-3 text-center">
            <a :href="org.href">
              <img
                :src="org.image"
                :alt="org.name">
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="ns:m-24 m-4 relative">
      <no-ssr>
        <v-icon
          name="quote-left"
          scale="3"
          class="m-3 text-grey-light absolute pin-t pin-l"
        />
      </no-ssr>
      <no-ssr>
        <v-icon
          name="quote-right"
          scale="3"
          class="m-3 text-grey-light absolute pin-b pin-r"
        />
      </no-ssr>
      <carousel
        :auto-play="true"
        :navigation-click-target-size="20"
        :per-page="1">

        <slide
          v-for="(testimonial, index) in home.testimonial"
          :key="index"
          class="p-3">

          <figure class="text-center relative">
            <blockquote class="italic font-normal text-2xl mb-3 text-grey-darker relative p-5 z-20">
              {{ testimonial.quote }}
            </blockquote>
            <figcaption class="uppercase">— <cite class="author font-bold text-small">{{ testimonial.author }}</cite></figcaption>
          </figure>
        </slide>

      </carousel>
    </section>

    <section class="bg-brown py-16 relative">
      <div class="container flex justify-between">
        <div class="ns:w-50 text-navy">
          <h2 class="mb-2 text-4xl leading-tight">Have any questions?</h2>
          <p class="leading-normal mt-0 mb-4">Please feel free to email us below</p>
          <a
            href="mailto:team@diversitea.co"
            class="no-underline inline-block bg-transparent hover:bg-navy text-navy-dark font-semibold hover:text-white py-2 px-4 border border-navy hover:border-transparent rounded mb-2 border-white">Click Here</a>
        </div>
        <div class="ns:w-50 ns:block hidden">
          <img
            src="~/assets/images/newsletter.svg"
            class="w-64 -mt-32"
            alt="Newsletter">
        </div>
      </div>
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
.pin-container {
  position: absolute;
  &-r {
    right: 4rem;
  }
}
</style>
