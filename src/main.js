import Vue from 'vue'
import App from './App'
// import firebase from 'firebase'
import Vuex from 'vuex'
import Ionic from "@ionic/vue"
import '@ionic/core/css/ionic.bundle.css'
// import { config } from '../../firebaseConfig'
import router from './router'
import store from './store'
import { IonicVueRouter } from "@ionic/vue"

Vue.config.productionTip = false
Vue.use(Ionic)
Vue.use(Vuex)

Vue.use(IonicVueRouter)

// firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
