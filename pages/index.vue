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
            <no-ssr>
              <v-icon
                :name="block.icon"
                scale="3"
                class="ma-3 text-navy"
              />
            </no-ssr>
            <h2 class="leading-tight text-lg mt-1 mb-1">{{ block.title }}</h2>
            <p class="leading-normal mt-0 mb-6">{{ block.paragraph }}</p>
          </div>

        </div>
      </div>
    </section>

    <splash/>

    <section class="container text-black ns:flex justify-between">
      <div class="ns:border-grey-lightest ns:border-solid ns:border-r-4 pt-10 ns:py-10 ns:pr-12 ns:mr-12">
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
    <section class="container py-10 bg-grey-lightest">
      <h1 class="text-center mb-12 text-4xl">Recent collaboration</h1>
      <ul class="flex list-reset justify-around">
        <li><img
          src="~/assets/images/placeholder/acme-1.svg"
          alt="Logo"></li>
        <li><img
          src="~/assets/images/placeholder/acme-2.svg"
          alt=""></li>
        <li><img
          src="~/assets/images/placeholder/acme-3.svg"
          alt=""></li>
        <li><img
          src="~/assets/images/placeholder/acme-4.svg"
          alt=""></li>
      </ul>
    </section>
    <section class="p-24">
      <carousel
        :auto-play="true"
        :navigation-click-target-size="20"
        :per-page="1">
        <slide>
          <div class="p-3">
            <figure class="text-center">
              <blockquote class="italic font-normal text-2xl mb-3 text-grey-darker">
                <no-ssr>
                  <v-icon
                    name="quote-left"
                    scale="2"
                    class="m-3 text-grey-dark"
                  />
                </no-ssr>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolorum excepturi, dicta iusto cupiditate dignissimos molestias, sequi at rerum rem, praesentium animi atque dolore unde.
                <no-ssr>
                  <v-icon
                    name="quote-right"
                    scale="2"
                    class="m-3 text-grey-dark"
                  />
                </no-ssr>
              </blockquote>
              <figcaption class="uppercase">— <cite class="author font-bold text-small">James Freeman, Founder and CPO</cite></figcaption>
            </figure>
          </div>
        </slide>
        <slide>
          <div class="p-3">
            <figure class="text-center">
              <blockquote class="italic font-normal text-2xl mb-3 text-grey-darker">
                <no-ssr>
                  <v-icon
                    name="quote-left"
                    scale="2"
                    class="m-3 text-grey-dark"
                  />
                </no-ssr>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolorum excepturi, dicta iusto cupiditate dignissimos molestias, sequi at rerum rem, praesentium animi atque dolore unde.
                <no-ssr>
                  <v-icon
                    name="quote-right"
                    scale="2"
                    class="m-3 text-grey-dark"
                  />
                </no-ssr>
              </blockquote>
              <figcaption class="uppercase">— <cite class="author font-bold text-small">James Freeman, Founder and CPO</cite></figcaption>
            </figure>
          </div>
        </slide>
        <slide>
          <div class="p-3">
            <figure class="text-center">
              <blockquote class="italic font-normal text-2xl mb-3 text-grey-darker">
                <no-ssr>
                  <v-icon
                    name="quote-left"
                    scale="2"
                    class="m-3 text-grey-dark"
                  />
                </no-ssr>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolorum excepturi, dicta iusto cupiditate dignissimos molestias, sequi at rerum rem, praesentium animi atque dolore unde.
                <no-ssr>
                  <v-icon
                    name="quote-right"
                    scale="2"
                    class="m-3 text-grey-dark"
                  />
                </no-ssr>
              </blockquote>
              <figcaption class="uppercase">— <cite class="author font-bold text-small">James Freeman, Founder and CPO</cite></figcaption>
            </figure>
          </div>
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
