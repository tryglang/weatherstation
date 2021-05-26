import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import LuftTemp from '../views/LuftTemp.vue'
import VannTemp from '../views/VannTemp.vue'
import VannStand from '../views/VannStand.vue'
import Vind from '../views/Vind.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/lufttemperatur',
    name: 'LuftTemp',
    component: LuftTemp
  },
  {
    path: '/vanntemperatur',
    name: 'VannTemp',
    component: VannTemp
  },
  {
    path: '/vannstand',
    name: 'VannStand',
    component: VannStand
  },
  {
    path: '/vind',
    name: 'Vind',
    component: Vind
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
