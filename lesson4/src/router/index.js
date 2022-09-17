import Vue from 'vue'
import VueRouter from 'vue-router'
import DashBoard from '../../pages/DashBoard.vue'
import AboutPage from '../../pages/AboutPage.vue'
import NotFound from '../../pages/NotFound.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routers: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashBoard
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/notfound',
      name: 'notfound',
      component: NotFound
    }

  ]
})

export default router
