<template>
  <!--
    Goals:
      User fills out quiz:
        User can see end result confirmation
        with last question:
        Ask to try a sample tea or do full subscription
        Confirmation of either sent to us via firebase or email
        Payment goes through snipcart
  -->
  <section
    v-cloak
    class="h-screen bg-navy flex items-center">
    <div
      v-for="(question, index) in quiz.questions"
      :key="index"
      class="max-w-lg mx-auto"
      style="max-height: 28rem; height: 95%; width:95%;">
      <div v-show="index === questionIndex">
        <div
          class="flex items-center bg-blue text-white text-sm font-bold px-4 py-3"
          role="alert">
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
          <p>This is the current index</p>
        </div>
      </div>
      <!-- <h1 class="text-grey-darker text-base">Introduction..</h1> -->
      <h1 class="text-grey-dark font-light leading-tight text-xl mb-3">{{ question.heading }}</h1>
      <div class="ns:rounded-lg ns:shadow-md flex ns:h-full">
        <div
          style="background-image: url('https://source.unsplash.com/gy_DN08336U')"
          class="bg-black bg-cover ns:w-1/4 h-full rounded-l-lg"/>
        <form class="bg-grey-lightest ns:w-3/4 p-5 rounded-r-lg relative">
          <div
            class="text-grey-darkest">
            <h2 class="leading-tight mt-0 mb-3">{{ question.subheading }}</h2>
            <p class="leading-normal mt-0 mb-3">{{ question.paragraph }}</p>
            <div
              v-for="(input, index) in question.inputs"
              :key="index">
              <div class="mb-2">
                <div class="ns:w-1/3"/>
                <radio :value="input.value"/>
              </div>
            </div>
            <div class="absolute pin-b pin-r p-3">
              <button
                v-if="questionIndex > 0"
                class="text-navy hover:text-navy-light font-bold py-2 px-4"
                @click="prev">Back</button>
              <button
                class="bg-navy hover:bg-navy-dark text-white font-bold py-2 px-4 rounded"
                @click="next">Next</button>
            </div>
          </div>

          <div v-show="questionIndex === quiz.questions.length">
            <h3>Your Results</h3>
            <p>
              You are: {{ score() }}
            </p>
          </div>


        </form>

      </div>
    </div>

  </section>
</template>

<script>
import Radio from '~/components/input/Radio.vue'
import Questions from '~/content/questions.json'

const quiz = Questions
console.log(quiz)
export default {
  components: {
    Radio
  },
  props: {},
  data() {
    return {
      questionIndex: 0,
      userInputs: Array(),
      quiz: quiz
    }
  },
  methods: {
    // go to next question
    next: function() {
      this.questionIndex++
      // eslint-no-console
      // console.log(this.userInputs)
    },
    prev: function() {
      this.questionIndex--
    },
    score: function() {
      const modeMap = {}
      const maxEl = this.userInputs[0]
      this.userInputs.forEach((userInput, index) => {
        // eslint-no-console
        console.log(userInput)
        let el = this.userInputs[index]
        if (modeMap[el] == null) {
          modeMap[el] = 1
        } else {
          modeMap[el]++
        }
        if (modeMap[el] > maxCount) {
          maxEl = el
          maxCount = modeMap[el]
        }
      })
    }
  }
}
</script>

<style>
</style>
