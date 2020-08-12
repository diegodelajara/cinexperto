import {
  SET_SHOW_BACK_BUTTON
} from './mutations.types'

export default {
  [SET_SHOW_BACK_BUTTON] (state, payload) {
    state.showBackButton = payload
  }
}