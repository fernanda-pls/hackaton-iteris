import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostosColeta from '../views/PostosColeta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PostosColeta',
    name: 'Coleta',
    component: PostosColeta
  }
]

const router = new VueRouter({
  routes
})

export default router
