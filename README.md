# vue-music

> 音乐播放器

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

### 总结

#############################################

### 组件

- 应用的框架组件
  - tab
  - m-header
  - player
- 页面组件
  - recommend
  - disc
  - singer
  - singer-detail
  - rank
  - top-list
  - search
  - usercenter
  - 基础组件
  - confirm
  - listview
  - loading
  - no-result
  - progress-bar
  - progress-circle
  - scroll
  - search-box
  - search-list
  - slider
  - song-list
  - switches
  - top-tip
- 功能组件
  - add-song
  - music-list
  - suggest

### 路由

1. package.json 中使用 `"dependencies": {"vue-router": "^2.5.3"}`.
2. 在 router 文件夹下创建 index.js.
3. 在 main.js 中 引入 `import router from './router'`, 在 `new Vue({router})`.

```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 懒加载分包
const Recommend = () => import('components/recommend/recommend')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    }
  ]
})
```

### 状态管理 vuex

1. package.json 中使用 `"dependencies": {"vuex": "^2.3.1"}`.
2. 创建 store 文件夹,分别创建 index.js、state.js、mutations.js、
   mutation-types.js、actions.js、getter.js
3. 在 index.js 中
4. 在 main.js 中 引入 `import store from './store'`, 在 `new Vue({store})`.

```js
// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
```
