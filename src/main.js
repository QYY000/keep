import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import qs from 'qs'
import 'mint-ui/lib/style.min.css'
import '../public/css/my_mint.scss'
import Footer from './components/Footer.vue'
// 1。导入axios模块 2.将axios加入Vue的原型对象中，使之随处可用 3.配置基础路径，客户端默认向该路径发送请求 
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.axios=axios
Vue.prototype.qs=qs
axios.defaults.baseURL='/api'

Vue.component('my-footer', Footer)
Vue.use(MintUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
