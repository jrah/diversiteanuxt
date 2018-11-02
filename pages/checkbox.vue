<template>
  <section class="">
    <form>
      <div>
        <input
          id="subscribeNews"
          type="checkbox"
          name="subscribe"
          value="newsletter">
        <label for="subscribeNews">Subscribe to newsletter?</label>
      </div>
      <div>
        <button type="submit">Subscribe</button>
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
