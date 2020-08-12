import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "login" */ "src/components/Home")
      //beforeEnter: privateRoute
    },
    {
      path: "/loading",
      name: "loading",
      component: () =>
        import(/* webpackChunkName: "login" */ 'src/components/Loading')
      //beforeEnter: privateRoute
    },
    {
      path: "/detail",
      name: "detail",
      component: () => import(/* webpackChunkName: "login" */ 'src/pages/Detail'),
      props: true
      //beforeEnter: privateRoute
    }
  ]
})