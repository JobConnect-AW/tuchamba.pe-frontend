import { createRouter, createWebHistory } from 'vue-router'
import CompareProfiles from '@/app/compare-profiles/CompareProfiles.vue'

const routes = [
  { path: '/', redirect: '/comparar' },
  { path: '/comparar', component: CompareProfiles }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
