// import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VuelazyLoad from 'vue-lazyload'
import { SET_PLAY_HISTORY, SET_FAVORITE_LIST } from './store/mutation-types'
import { loadPlay, loadFavorite } from 'common/js/cache'
import { processSongsUrl } from 'common/js/song'

import 'common/stylus/index.styl'

// eslint-disable-next-line no-unused-vars
import vConsole from 'vconsole'

Vue.config.productionTip = false
// 使用懒加载
Vue.use(VuelazyLoad, {
  loading: require('common/image/default.png')
})
fastclick.attach(document.body)

const historySongs = loadPlay()
processSongsUrl(historySongs).then(songs => {
  store.commit(SET_PLAY_HISTORY, songs)
})

const favoriteSongs = loadFavorite()
processSongsUrl(favoriteSongs).then(songs => {
  store.commit(SET_FAVORITE_LIST, songs)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
