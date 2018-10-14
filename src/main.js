// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
<<<<<<< HEAD
import axios from 'axios'
=======
// import axios from 'axios'
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/css/common.css'
import './assets/css/font/iconfont.css'
<<<<<<< HEAD
=======
import $ from 'jquery'
>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(vueResource)
<<<<<<< HEAD
Vue.prototype.$ajax = axios
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
=======
// Vue.prototype.$ajax = axios

>>>>>>> 8ab0a5525d7bd2fd98df4afe49ce3ab5dd18ec4d
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
