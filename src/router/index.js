import Vue from 'vue'
import Router from 'vue-router'
import Texto from '../components/Texto.vue'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Router
  },
  {
    path: '/android',
    name: 'android',
    component: Texto
  }
]

const router = new Router({
  
})

export default router
