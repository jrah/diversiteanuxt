// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)

export const INIT_FORM = 'INIT_FORM'
export const UPDATE_QUESTION = 'UPDATE_QUESTION'
export const INCREMENT_QUESTION_INDEX = 'INCREMENT_QUESTION_INDEX'
export const DECREMENT_QUESTION_INDEX = 'DECREMENT_QUESTION_INDEX'

export const getters = {
  isChecked(state) {
    return index => {
      if (!state.form[state.questionIndex]) {
        return false
      }
      return state.form[state.questionIndex].selectedInput === index
    }
  }
}

export const mutations = {
  [UPDATE_QUESTION]: (
    state,
    { questionIndex = null, selectedInput = null }
  ) => {
    const index = questionIndex ? questionIndex : state.questionIndex
    state.form = {
      ...state.form,
      [index]: {
        selectedInput
      }
    }
  },
  [INCREMENT_QUESTION_INDEX]: state => {
    state.questionIndex += 1
  },
  [DECREMENT_QUESTION_INDEX]: state => {
    state.questionIndex -= 1
  }
}
export const actions = {
  [INIT_FORM]: ({ commit }, questions) => {
    questions.forEach((question, index) => {
      commit(UPDATE_QUESTION, { questionIndex: index })
    })
  }
}

export const state = () => ({
  form: {},
  questionIndex: 0
})
