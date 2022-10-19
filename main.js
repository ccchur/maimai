import App from './App'
import store from '@/store/index.js'

//初始化vuex中数据


// #ifndef VUE3
import Vue from 'vue'

import uView from "uview-ui";
Vue.use(uView);



Vue.prototype.$store = store


Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
	store
  }
}
// #endif