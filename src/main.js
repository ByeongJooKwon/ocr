import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './store/store'
import VSwipe from 'vswipe'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VSwipe)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
