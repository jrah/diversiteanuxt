<template>
  <div>
    <h2 class="leading-tight mt-0 mb-3"/>
    <p class="leading-normal mt-0 mb-3">{{ question.paragraph }}</p>
    <div
      v-for="(input, index) in question.inputs"
      :key="index"
      class="mb-2">
      <div class="ns:w-1/3"/>
      <label>
        <input
          :value="index"
          :name="questionIndex"
          :checked="isChecked(index)"
          type="radio"
          @change="handleChange(index)"> {{ input.text }}

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
  },
  methods: {
    isChecked(index) {
      return this.$store.getters['quiz/isChecked'](index)
    },
    handleChange(inputIndex) {
      this.$store.commit('quiz/UPDATE_QUESTION', { selectedInput: inputIndedx })
    }
  }
}
</script>
