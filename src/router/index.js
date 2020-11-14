import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home.vue"
import Root from "../components/Root.vue"
import Sort from "../components/Sort.vue"
import Discover from "../components/Discover.vue"
import Cart from "../components/Cart.vue"
import Me from "../components/Me.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Root,
    redirect: '/home/01',
    children: [
      { path: '/home/:id', component: Home },
      { path: '/sort/:id', component: Sort},
      { path: '/discover/:id', component: Discover },
      { path: '/cart/:id', component: Cart },
      { path: '/me/:id', component: Me }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
