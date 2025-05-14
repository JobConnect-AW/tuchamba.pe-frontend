import { createRouter, createWebHistory } from 'vue-router'
import CompareProfiles from '@/app/public/CompareProfiles.vue'

const routes = [
  { path: '/comparar', component: CompareProfiles },
  { path: '/', redirect: '/comparar' }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
