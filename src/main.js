// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VuelazyLoad from 'vue-lazyload'
import 'common/stylus/index.styl'

// eslint-disable-next-line no-unused-vars
import vConsole from 'vconsole'

Vue.config.productionTip = false
// 使用懒加载
Vue.use(VuelazyLoad, {
  loading: require('common/image/default.png')
})
fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
