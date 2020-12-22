import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const masters = {
  //
}

const state = {
  requestCounter: 0,
  loading: false,
  showModal: false,
  loginFormExpand: false
}

const getters = {
  masters: () => masters
}

const mutations = {
  //
}

const modules = {
  //
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  modules
})