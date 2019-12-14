import Vue from 'vue'
import 'lib-flexible/flexible'

import App from './App.vue'


Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el:'#app',
  components:{App},
  template:'<App/>'//
})
// module.exports = {
//   runtimeCompiler:true
// } 在config.js中配这个可以允许template


console.log('xxx')  
// "rules": {
//   "no-console":0
// }, 在package.json中配置这个可以console输出 