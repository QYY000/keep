import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Register.vue')
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
  },
  {
    path: '/sport',
    component: () => import(/* webpackChunkName: "sport" */ '../views/Sport.vue')
  },
  {
    path: '/community',
    component: () => import(/* webpackChunkName: "community" */ '../views/Community.vue')
  },
  {
    path: '/',
    component: Index
  }

]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
