import { createRouter, createWebHashHistory } from 'vue-router'
import MainCalendar from '../views/MainCalendar.vue'
import MainNote from '../views/MainNote.vue'

const routes = [
  {
    path: '/',
    name: 'note',
    component: MainNote
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: MainCalendar
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
