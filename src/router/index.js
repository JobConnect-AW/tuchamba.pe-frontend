import { createRouter, createWebHistory } from 'vue-router'
import SearchOffers from '@/app/offers/pages/SearchOffers.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/search-offers',
    component: SearchOffers
  }],
})

export default router
