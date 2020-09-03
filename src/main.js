import Vue from 'vue'
import App from './App'
import { rtdbPlugin } from 'vuefire'
import Vuex from 'vuex'
import Ionic from "@ionic/vue"
import '@ionic/core/css/ionic.bundle.css'
import router from './router'
import store from './store'
import '@ionic/core/css/ionic.bundle.css'

import {
  star,
  starOutline
} from '@ionic/vue/node_modules/ionicons/icons'

import { addIcons } from '@ionic/vue/node_modules/ionicons'

Vue.use(Ionic)

addIcons({
  'ios-star-outline': starOutline.ios,
  'md-star-outline': starOutline.md,
  'ios-star': star.ios,
  'md-star': star.md
})

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]
Vue.use(Ionic)
Vue.use(Vuex)
Vue.use(rtdbPlugin)

new Vue({
  router,
  render: h => h(App),
  // vuetify,
  store
}).$mount('#app')
