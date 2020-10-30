import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
Vue.use(VueRouter)

const routes = [
 
  {
    path: '/details',
    name:'details',
    component: () => import(/* webpackChunkName: "details" */ '../views/Details.vue')
  },
  {
    path: '/reg',
    name:'reg',
    component: () => import(/* webpackChunkName: "reg" */ '../views/Register.vue')
  },
  {
    path: '/login',
    name:'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/me',
    name:'me',
    component: () => import(/* webpackChunkName: "me" */ '../views/Me.vue')
  },
  {
    path: '/sport',
    name:'sport',
    component: () => import(/* webpackChunkName: "sport" */ '../views/Sport.vue')
  },
  {
    path: '/community',
    name:'community',
    component: () => import(/* webpackChunkName: "community" */ '../views/Community.vue')
  },
  {
    path: '/',
    name:'index',
    component: Index
  }

]

const router = new VueRouter({
  routes
})
export default router
