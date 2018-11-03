<template>
  <section class="container">
    <form class="w-full max-w-xs">
      <div class="ns:flex ns:items-center mb-6">
        <div class="ns:w-1/3">
          <label
            class="block text-grey font-bold ns:text-right mb-1 ns:mb-0 pr-4"
            for="inline-full-name">
            Full Name
          </label>
        </div>
        <div class="ns:w-2/3">
          <input
            id="inline-full-name"
            class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-navy"
            type="text"
            value="Jane Doe">
        </div>
      </div>
      <div class="ns:flex ns:items-center mb-6">
        <div class="ns:w-1/3">
          <label
            class="block text-grey font-bold ns:text-right mb-1 ns:mb-0 pr-4"
            for="inline-username">
            Password
          </label>
        </div>
        <div class="ns:w-2/3">
          <input
            id="inline-username"
            class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-navy"
            type="password"
            placeholder="******************">
        </div>
      </div>
      <div class="ns:flex ns:items-center mb-6">
        <div class="ns:w-1/3"/>
        <label class="ns:w-2/3 block text-grey font-bold">
          <input
            class="mr-2 leading-tight"
            type="checkbox">
          <span class="text-sm">
            Send me your newsletter!
          </span>
        </label>
      </div>
      <div class="ns:flex ns:items-center">
        <div class="ns:w-1/3"/>
        <div class="ns:w-2/3">
          <button
            class="shadow bg-navy hover:bg-navy-light focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button">
            Sign Up
          </button>
        </div>
      </div>
    </form>

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
