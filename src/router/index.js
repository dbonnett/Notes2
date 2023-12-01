import { createRouter, createWebHashHistory } from 'vue-router'
import MainCalendar from '../views/MainCalendar.vue'
import MainNote from '../views/MainNote.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainCalendar
  },
  { 
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }, 
  {
    path: '/note',
    name: 'note',
    component: MainNote
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
