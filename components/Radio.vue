<template>
  <div>
    <label class="md:w-2/3 block text-grey-darkest">
      <input
        type="radio"
        class="mr-2 leading-tight">
      <span class="text-sm">
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
