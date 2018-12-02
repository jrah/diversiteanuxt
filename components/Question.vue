<template>
  <div>
    <div
      v-for="(input, index) in question.inputs"
      :key="index"
      class="mb-2">
      <div v-if="input.type == 'radio'">
        <div class="ns:w-1/3"/>
        <label>
          <input
            :value="index"
            :name="questionIndex"
            :checked="isChecked(index)"
            :type="input.type"
            @change="handleChange(input, index)"> {{ input.text }}
        </label>
      </div>
      <div v-else>
        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">{{ input.text }}</label>
        <input
          :name="questionIndex"
          :checked="isChecked(index)"
          :type="input.type"
          :value="input.text"
          class="appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey"
          @change="handleChange(input, index)">
      </div>
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
    handleChange(input, index) {
      const selectedInput = {
        ...input,
        index
      }
      this.$store.commit('quiz/UPDATE_QUESTION', { selectedInput })
    }
  }
}
</script>
