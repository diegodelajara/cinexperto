import Home from './components/Home'
import Detail from './components/Detail'
import Loading from './components/Loading'


import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/loading',
      name: 'loading',
      component: Loading
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
      props: true
    }
  ]
})