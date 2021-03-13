import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PostosColeta from '../views/ListaColeta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ListaColeta',
    name: 'Coleta',
    component: ListaColeta
  }
]

const router = new VueRouter({
  routes
})

export default router
