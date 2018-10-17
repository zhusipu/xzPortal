// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/css/common.css'
import './assets/css/font/iconfont.css'
import common from './assets/js/util'
import qs from 'qs';

import store from './store/store'

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(vueResource)
Vue.use(common)
Vue.prototype.$qs = qs;
Vue.prototype.$ajax = axios
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
