import { createRouter, createWebHistory } from 'vue-router'
import CompareProfiles from '@/app/public/CompareProfiles.vue'
import WorkerDashboard from '@/app/dashboard/pages/WorkerDashboard.vue'
import CustomerDashboard from '@/app/dashboard/pages/CustomerDashboard.vue'

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
        path: '/dashboard',
        children: [
          { path: '/comparar', component: CompareProfiles },
          { path: '/', redirect: '/comparar' },
          { path: 'worker', component: WorkerDashboard },
          { path: 'customer', component: CustomerDashboard }
        ]
      }
  ],
})
