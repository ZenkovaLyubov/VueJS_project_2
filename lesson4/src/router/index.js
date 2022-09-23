import Vue from 'vue'
import VueRouter from 'vue-router'
// import DashBoard from '../../pages/DashBoard.vue'
// import AboutPage from '../../pages/AboutPage.vue'
// import NotFound from '../../pages/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    // component: DashBoard
    component: () => import(/* webpackChunkName: "dashboard" */ '../../pages/DashBoard.vue')
  },
  // {
  //   path: '/dashboard/:page',
  //   name: 'dashboardPage',
  //   component: DashBoard
  // },
  // {
  //   path: '/dashboard/add/payment/:category/:value',
  //   name: 'AddPayment',
  //   component: DashBoard
  // },
  {
    // path: '/about',
    path: '/about*',
    name: 'about',
    // component: AboutPage
    component: () => import(/* webpackChunkName: "aboutpage" */ '../../pages/AboutPage.vue')
  },
  {
    path: '/notfound',
    name: 'notfound',
    // component: NotFound
    component: () => import(/* webpackChunkName: "notfound" */ '../../pages/NotFound.vue')
  }
  // {
  //   path: '*',
  //   component: NotFound
  // }
  // {
  //   path: '*',
  //   // redirect: '/notfound'
  //   redirect: {
  //     name: 'notfound'
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

// const user = false
// router.beforeEach((to, from, next) => {
//   if (!user && to.name !== 'notfound') next({ name: 'notfound' })
//   else next()
// })

// const titles = {
//   dashboard: 'Dashboard',
//   about: 'About',
//   notfound: 'Not Found'
// }

// router.afterEach((to) => {
//   document.title = titles[to.name]
// })

export default router
