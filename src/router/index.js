import { createRouter, createWebHistory } from 'vue-router'
import WorkerDashboard from '@/app/dashboard/pages/WorkerDashboard.vue'
import CustomerDashboard from '@/app/dashboard/pages/CustomerDashboard.vue'
import SearchOffers from '@/app/offers/pages/SearchOffers.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      children: [
        { path: 'worker', component: WorkerDashboard },
        { path: 'customer', component: CustomerDashboard }
      ]
    },
    {
      path: '/search-offers',
      component: SearchOffers
    }
  ],
})

export default router
