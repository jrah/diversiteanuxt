<template>
  <div>
    <header>

      <div
        :style="{'background-image' : 'url('+home.image+')'}"
        class="bg-cover bg-center py-6 relative flex items-center bg-navy">
        <div class="container py-32 relative z-10">
          <div class="text-white m:w-3/5 l:w-2/5">
            <h1
              v-if="home.title"
              class="mt-0 f1 mb-2 font-bold text-5xl leading-tight">{{ home.title }}</h1>
            <p
              v-if="home.intro"
              class="m-0 leading-normal">{{ home.intro }}</p>
          </div>
        </div>
        <div
          class="overlay"
          style="background-image: linear-gradient(205deg,rgba(37, 37, 37, 0.23), rgba(10, 10, 10, 0.72));"/>
      </div>

    </header>
  </div>
</template>

<script>
import home from '~/content/home.json'

export default {
  data() {
    return {
      home
    }
  }
}
</script>

<style lang="scss">
.overlay {
  position: absolute;
  @apply pin;
  z-index: 1;
  display: block;
}
</style>
