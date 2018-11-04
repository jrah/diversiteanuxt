<template>
  <div>
    <label
      tabindex="0"
      class="ns:w-2/3 block text-grey-darkest">
      <input
        :value="value"
        name="checked"
        type="radio"
        class="mr-2 leading-tight">
      <span class="text-sm">
        {{ value }}
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
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
