
import Vue from 'vue'
import Vuex from 'vuex'


import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import movies from './modules/movies'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    movies
  },
  state,
  getters,
  mutations,
  actions
})

export default store


