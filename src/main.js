import Vue from 'vue'
import  'lib-flexible/flexible'
//先引入第三方的，再引入自定义的

import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import store from './vuex/store'

//注册全局组件
Vue.component('Header',Header)

new Vue({
  // components:{
  //   App
  // },
  // template:'<App>'
  render:h => h(App),
  router,
  store,
}).$mount('#app')