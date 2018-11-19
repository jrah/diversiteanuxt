<template>
  <!--
    Goals:
      User fills out quiz:
        User can see end result confirmation
        with last question:
        Ask to try a sample tea or do full subscription
        Confirmation of either sent to us via firebase or email
        Payment goes through snipcart
        Allow for both checkbox and text input type

      Bugs:
        Different input selection should replace in array, currently only seems to append array, unless check box or otherwise
        When click next seems to go to the next one but then back again
        When click on one radio button/checkbox corresponding is also clicked. Could be to do with the index name of each question set.

          https://codepen.io/heatherduvall/pen/ggedwy
  -->
  <section
    v-cloak
    class="h-screen bg-navy flex items-center">
    <div
      class="max-w-lg mx-auto"
      style="max-height: 28rem; height: 95%; width:95%;">
      <div
      >
        <h1
          v-for="(question, index) in questions"
          v-if="questionIndex === index"
          :key="index"
          class="text-grey-dark font-light leading-tight text-xl mb-3">{{ question.heading }}</h1>
        <div
          class="ns:rounded-lg ns:shadow-md flex ns:h-full">
          <div
            style="background-image: url('https://source.unsplash.com/gy_DN08336U')"
            class="bg-black bg-cover ns:w-1/4 h-full rounded-l-lg"/>
          <div
            class="bg-grey-lightest ns:w-3/4 p-5 rounded-r-lg relative">
            <div>
              <div
                class="text-grey-darkest">

                <div v-if="!completedQuestionnaire">
                  <Question
                    v-for="(question, index) in questions"
                    v-if="questionIndex === index"
                    :question="question"
                    :question-index="questionIndex"
                    :key="index"/>
                </div>
                <div v-else>
                  <h2 class="leading-tight mt-0 mb-3">Thanks for your entries.</h2>
                  <p class="leading-normal mt-0 mb-3">Do you want to buy a subscription or try a £1 sample?</p>
                </div>
                <div class="absolute pin-b pin-r p-3">
                  <button
                    v-if="questionIndex > 0"
                    class="text-navy hover:text-navy-light font-bold py-2 px-4"
                    @click="prev">Back</button>
                  <button
                    :disabled="completedQuestionnaire"
                    class="bg-navy hover:bg-navy-dark text-white font-bold py-2 px-4 rounded"
                    @click="next">Next</button>
                </div>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script>
import Radio from '~/components/input/Radio.vue'
import { Question } from '~/components/index'
import { questions } from '~/content/questions.json'
export default {
  components: {
    Radio,
    Question
  },
  props: {},
  data() {
    return {
      questionIndex: 0,
      questions
    }
  },
  computed: {
    completedQuestionnaire() {
      if (!questions) {
        return false
      }
      return this.questionIndex >= questions.length
    }
  },
  updated() {
    console.log('Form:', this.form)
    console.log('Question index:', this.questionIndex)
  },
  methods: {
    // go to next question
    next: function() {
      this.questionIndex += 1
      // eslint-no-console
      // console.log(this.userInputs)
    },
    prev: function() {
      this.questionIndex -= 1
    }
  }
}
</script>

<style>
</style>
