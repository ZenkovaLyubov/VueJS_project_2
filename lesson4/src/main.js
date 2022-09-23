import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '../css/style.scss'
import router from './router'
import modal from './plugins'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
