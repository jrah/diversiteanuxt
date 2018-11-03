import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  // store data share in app
  state: {},
  getters: {},
  // these are functions that perform modifications to the state
  mutations: {},
  // These are also functions like mutations only with two differences. First, actions are used for asynchronous operations (So they are great for doing http requests), and second, the actions only should modify the store by calling mutations.
  actions: {}
})
