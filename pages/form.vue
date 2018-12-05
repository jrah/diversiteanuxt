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
    class="h-full bg-navy flex items-center justify-center">
    <div
      v-if="!completedQuestionnaire"
      class="max-w-lg mx-auto"
      style="max-height: 28rem; height: 65%; width:95%;">
      <div
        v-for="(question, index) in questions"
        v-if="questionIndex === index"
        :key="index">
        <div class="flex justify-between">
          <h1 class="text-grey-dark font-light leading-tight text-xl mb-3">{{ question.heading }}</h1>
          <span class="text-grey-dark font-light leading-tight text-xl mb-3">{{ questionIndex + 1 }}/3</span>
        </div>
      </div>
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
              <div
                v-for="(question, index) in questions"
                v-if="questionIndex === index"
                :key="index">
                <p
                  v-if="question.paragraph"
                  class="font-light leading-tight text-xl mb-3"
                > {{ question.paragraph }}</p>
              </div>
              <div>
                <Question
                  v-for="(question, index) in questions"
                  v-if="questionIndex === index"
                  :question="question"
                  :question-index="questionIndex"
                  :key="index"/>
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
    <div
      v-else
      class="">
      <h2 class="text-grey-dark font-light leading-tight text-xl5 mb-6 text-center">Please select your choice</h2>

      <div class="ns:flex container">
        <div class="ns:px-12 ns:py-0 py-4">
          <div class="rounded overflow-hidden shadow-lg bg-white max-w-xl">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-navy">£1.50 Tea Curation</div>
              <p class="text-navy text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pb-6">
              <a
                href="#"
                class="no-underline bg-navy hover:bg-navy-dark text-white font-bold py-2 px-4 rounded">Add to cart</a>
            </div>
          </div>
        </div>
        <div class="ns:px-12 ns:py-0 py-4">
          <div class="rounded overflow-hidden shadow-lg bg-white max-w-xl">
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2 text-navy">Subscription Service</div>
              <p class="text-navy text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pb-6">
              <a
                href="#"
                class="no-underline bg-navy hover:bg-navy-dark text-white font-bold py-2 px-4 rounded"
              >Add to cart</a>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center py-6">
        <button
          class="bg-transparent hover:bg-navy text-white font-semibold hover:text-white py-2 px-4 border border-navy-light rounded"
          @click="prev">Back</button>
      </div>

      <a
        href="#"
        class="block text-white no-underline text-center"

        @click="sendToFirebase">Would you like to look at our tea dictionary?</a>

    </div>

  </section>
</template>

<script>
import Radio from '~/components/input/Radio.vue'
import { Question } from '~/components/index'
import { questions } from '~/content/questions.json'
export default {
  firebase: {
    answers: this.$firebase
      .database()
      .ref.ref('/')
      .set(this.$store.state.quiz.form)
  },
  components: {
    Radio,
    Question
  },
  props: {},
  data() {
    return {
      questions
    }
  },
  computed: {
    questionIndex() {
      console.log(this.$store.state.quiz.questionIndex)
      return this.$store.state.quiz.questionIndex
    },
    completedQuestionnaire() {
      if (!questions) {
        return false
      }
      console.log('end of quiz results: ', this.$store.state.quiz.form)
      return this.questionIndex >= questions.length
    }
  },
  updated() {
    console.log(this.$store.state.quiz.form)
  },
  mounted() {
    this.$store.dispatch('quiz/INIT_FORM', questions)
    console.log('mounted')
  },
  methods: {
    // go to next question
    next: function() {
      this.$store.commit('quiz/INCREMENT_QUESTION_INDEX')
    },
    prev: function() {
      this.$store.commit('quiz/DECREMENT_QUESTION_INDEX')
    },
    sendToFirebase: function() {
      this.$firebaseRefs.answers.push({
        questions: questions
      })
      alert('Succeessfully added')
    }
  }
}
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout,
#site-canvas {
  min-height: 100%;
  height: 100%;
  position: relative;
}
</style>
