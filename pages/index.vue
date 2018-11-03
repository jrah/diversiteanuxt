<template>
  <section class="h-screen bg-navy flex items-center">

    <div
      class="max-w-lg mx-auto"
      style="max-height: 28rem; height: 95%; width:95%;">
      <!-- <h1 class="text-grey-darker text-base">Introduction..</h1> -->
      <div class="ns:rounded-lg ns:shadow-md flex h-full">
        <div
          style="background-image: url('https://source.unsplash.com/gy_DN08336U')"
          class="bg-black bg-cover ns:w-1/4 h-full rounded-l-lg"/>
        <form class="bg-grey-lightest ns:w-3/4 p-4 rounded-r-lg">
          <div class="p-5">
            <h1 class="leading-tight">Lorem ipsum dolor sit amet.</h1>
            <p class="leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum debitis dolore maxime voluptate dolorem blanditiis?</p>

          </div>

        </form>

      </div>
    </div>

  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
</style>
