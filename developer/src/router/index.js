import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/main.vue')
  },
  {
    path: '/improvement',
    name: 'Improvement',
    component: () => import('../views/improvement.vue')
  },
  {
    path: '/safety',
    name: 'Safety',
    component: () => import('../views/safety.vue')
  },
  {
    path: '/enginering',
    name: 'Enginering',
    component: () => import('../views/enginering.vue')
  },
  {
    path: '/infrastructure',
    name: 'Infrastructure',
    component: () => import('../views/infrastructure.vue')
  },
  {
    path: '/transport',
    name: 'Transport',
    component: () => import('../views/transport.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
