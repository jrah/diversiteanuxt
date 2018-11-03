<template>
  <section class="h-screen bg-navy flex items-center">
    <div
      class="max-w-lg mx-auto"
      style="max-height: 28rem; height: 95%; width:95%;">
      <!-- <h1 class="text-grey-darker text-base">Introduction..</h1> -->
      <h1 class="text-grey-dark font-light leading-tight text-xl mb-3">Are you adventurous?</h1>
      <div class="ns:rounded-lg ns:shadow-md flex ns:h-full">
        <div
          style="background-image: url('https://source.unsplash.com/gy_DN08336U')"
          class="bg-black bg-cover ns:w-1/4 h-full rounded-l-lg"/>
        <form class="bg-grey-lightest ns:w-3/4 p-5 rounded-r-lg relative">
          <div class="text-grey-darkest">
            <h1 class="leading-tight mt-0 mb-3">Lorem ipsum dolor sit amet.</h1>
            <p class="leading-normal mt-0 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum debitis dolore maxime voluptate dolorem blanditiis?</p>
            <div class="md:flex md:items-center mb-6"><div class="md:w-1/3"/>
              <label class="md:w-2/3 block text-grey-darkest">
                <input
                  type="radio"
                  class="mr-2 leading-tight">
                <span class="text-sm">
                  Send me your newsletter!
                </span>
              </label>
            </div>
            <div class="md:flex md:items-center mb-6"><div class="md:w-1/3"/>
              <label class="md:w-2/3 block text-grey-darkest">
                <input
                  type="radio"
                  class="mr-2 leading-tight">
                <span class="text-sm">
                  Send me your newsletter!
                </span>
              </label>
            </div>
            <div class="md:flex md:items-center mb-6"><div class="md:w-1/3"/>
              <label class="md:w-2/3 block text-grey-darkest">
                <input
                  type="radio"
                  class="mr-2 leading-tight">
                <span class="text-sm">
                  Send me your newsletter!
                </span>
              </label>
            </div>
            <div class="absolute pin-b pin-r p-3">
              <button class="text-navy hover:text-navy-light font-bold py-2 px-4">Back</button>
              <button class="bg-navy hover:bg-navy-dark text-white font-bold py-2 px-4 rounded">Next</button>
            </div>
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
