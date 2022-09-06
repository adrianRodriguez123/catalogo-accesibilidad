import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Principal from '../views/Principal.vue'
import Texto from '../components/Texto.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/principal/',
      name: 'Principal',
      component: Principal
    },
    {
      path: '/principal/:prin',
      component: Principal
    }
  ]
})
