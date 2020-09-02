
import Vue from 'vue'
import Vuex from 'vuex'


import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

import movies from './modules/movies'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: [
    movies,
    user
  ],
  state,
  getters,
  mutations,
  actions
})

export default store


