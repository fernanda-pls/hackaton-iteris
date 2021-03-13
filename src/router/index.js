import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListaColeta from '../views/ListaColeta.vue'
import Ovos from '../views/Ovos.vue'

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
  },
  {
    path: '/Ovos',
    name: 'Ovos',
    component: Ovos
  }
]

const router = new VueRouter({
  routes
})

export default router
