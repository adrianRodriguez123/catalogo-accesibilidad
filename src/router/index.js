import Vue from 'vue'
import Router from 'vue-router'
import Texto from '../components/Texto.vue'
import Test from '../components/Test.vue'
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
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }
]

const router = new Router({
  
})

export default router
