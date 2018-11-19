<template>
  <div>
    <div
      v-for="(input, index) in question.inputs"
      :key="index"
      class="mb-2">
      <div class="ns:w-1/3"/>
      <label>
        <input
          :value="input.value"
          v-model="inputs[index]"
          :name="questionIndex"
          checked
          type="radio"> {{ input.text }}

      </label>
      <!-- <radio :value="input.value"/> -->

    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    },
    questionIndex: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      inputs: {
        value: ''
      }
    }
  }
}
</script>
