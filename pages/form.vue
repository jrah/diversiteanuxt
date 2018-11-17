<template>
  <section class="h-screen bg-navy flex items-center">
    <div
      class="max-w-lg mx-auto"
      style="max-height: 28rem; height: 95%; width:95%;">
      <!-- <h1 class="text-grey-darker text-base">Introduction..</h1> -->
      <h1 class="text-grey-dark font-light leading-tight text-xl mb-3">Are you adventurous?</h1>
      <div class="ns:rounded-lg ns:shadow-md flex ns:h-full">
        <div
          style="background-image: url('https://source.unsplash.com/gy_DN08336U')"
          class="bg-black bg-cover ns:w-1/4 h-full rounded-l-lg"/>
        <form class="bg-grey-lightest ns:w-3/4 p-5 rounded-r-lg relative">
          <div
            class="text-grey-darkest">
            <h1 class="leading-tight mt-0 mb-3">Lorem ipsum dolor sit amet.</h1>
            <p class="leading-normal mt-0 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum debitis dolore maxime voluptate dolorem blanditiis?</p>
            <div class="mb-2">
              <div class="ns:w-1/3"/>
              <radio value="First"/>
            </div>
            <div class="mb-2">
              <div class="ns:w-1/3"/>
              <radio value="Second"/>
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


        </form>

      </div>
    </div>

  </section>
</template>

<script>
import Radio from '~/components/Radio.vue'
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
      userResponses: Array(),
      quiz: quiz
    }
  },
  methods: {
    // go to next question
    next: function() {
      this.questionIndex++
      // eslint-no-console
      // console.log(this.userResponses)
    },
    prev: function() {
      this.questionIndex--
    },
    score: function() {
      const modeMap = {}
      const maxEl = this.userResponses[0]
      this.userResponses.forEach((userResponse, index) => {
        // eslint-no-console
        console.log(userResponse)
        let el = this.userResponses[index]
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
