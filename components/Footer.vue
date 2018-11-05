<template>
  <footer>
    <div class="container flex justify-between items-center">
      <small class="block font-black">© 2018 {{ site.title }} </small>
      <ul
        v-if="icons"
        class="pa-0 ma-0 list flex justify-between">
        <li
          v-for="(icon, index) in icons"
          :key="index"
          :name=" '' + index "
          class="inline mr-3">
          <a
            :href="icon.href"
            class="text-grey-darkest hover:text-red">
            <no-ssr>
              <v-icon
                :name="'brands/' + icon.type"
                scale="2" />
            </no-ssr>
          </a>
        </li>
      </ul>
      <div
        v-else
        class="bg-red-lightest border-l-4 border-red text-red-dark p-4"
        role="alert">
        <p class="font-bold">No icons</p>
      </div>

    </div>
  </footer>
</template>

<script>
import site from '~/content/site.json'

export default {
  data() {
    return {
      site: site,
      icons: site.social
    }
  }
}
</script>

<style lang="scss">
</style>
