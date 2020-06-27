import Vue from 'vue'
import App from './App'
// import firebase from 'firebase'
import VueRouter from 'vue-router'
// import { config } from '../../firebaseConfig'
import { routes } from './routes'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})
// Initialize Firebase
// firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
