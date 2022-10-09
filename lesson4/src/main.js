import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '../css/style.scss'
import router from './router'
import modal from './plugins/ModalWindow'
import context from './plugins/ContextMenu'
import vuetify from './plugins/vuetify'
// import { Bar } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


Vue.config.productionTip = false
Vue.use(modal)
Vue.use(context)

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')
