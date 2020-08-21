import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import {router} from './router'

Vue.config.productionTip = false

Vue.use(ElementUI);

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString().toUpperCase()
  return value
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
