import { fb, auth } from '../../../../firebaseConfig'

import {
  GET_CHECK_AUTH,
  GET_USER,
  SET_LOG_OUT
} from './actions.types'
import { SET_USER } from './mutations.types'

export default {
  async [GET_USER] (context, method) {
    let user
    switch (method) {
      case 'gmail':
        try {
          const provider = new fb.auth.GoogleAuthProvider()
          user = await auth.signInWithPopup(provider)
        } catch (error) {
          console.log('%c error.message', 'color:tomato', error.message)
        }
      break
    
      default:
        break
    }
    return user
  },

  [GET_CHECK_AUTH] ({ commit }) {
    auth.onAuthStateChanged(function(user) {
      user
        ? commit(SET_USER, user)
        : commit(SET_USER, null)
    })
  },
  async [SET_LOG_OUT] ({ commit }) {
    await auth.signOut()
    commit(SET_USER, null)
  }
}
