import Vue from 'vue'
import App from './App'
import { rtdbPlugin } from 'vuefire'
import Vuex from 'vuex'
import Ionic from "@ionic/vue"
import '@ionic/core/css/ionic.bundle.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(Ionic)
Vue.use(Vuex)
Vue.use(rtdbPlugin)

new Vue({
  router,
  render: h => h(App),
  // vuetify,
  store
}).$mount('#app')
