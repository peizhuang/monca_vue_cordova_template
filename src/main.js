import axios from 'axios'
import cordova from './cordova'

import Vue from 'vue'
import store from './store'
import router from './router'
import App from './App'

Vue.config.productionTip = false
Vue.config.devtools = true
window.cordovaLog = true

axios.defaults.withCredentials = true
axios.defaults.timeout = 15000
axios.defaults.baseURL = ''

axios.interceptors.request.use((config) => {
}, (error) => {
  console.error(error)
})

axios.interceptors.response.use((response) => {
}, (error) => {
  console.error(error)
})
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<app></app>',
  components: {App},
  mounted () {
    cordova.event.onReady(() => {
    })
  }
})
