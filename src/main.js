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


// 全局守卫?????????????????????
router.beforeEach((to,from,next)=>{
  if(to.path==='/community'||to.path==='/me'||to.path==='/sport'){
    const user=localStorage.getItem('isLogin')
    if(user){
      next()
    }else{
      next('/login')
    }
  }
  else{
    next()
  }
})
// 在全局创建一个bus对象
var bus=new Vue()
export default bus;
Vue.prototype.bus=bus


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
