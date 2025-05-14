// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import CompareProfiles from '@/app/public/CompareProfiles.vue'
import WorkerDashboard from '@/app/dashboard/pages/WorkerDashboard.vue'
import CustomerDashboard from '@/app/dashboard/pages/CustomerDashboard.vue'
import Configuracion from '@/app/trabajador/views/Configuracion.vue';
import MyProfileTrabajador from '@/app/trabajador/views/MyProfile-Trabajador.vue';
import Planes from '@/app/trabajador/views/Planes.vue';

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
    },
    {
      path: '/perfil-trabajador',
      name: 'PerfilTrabajador',
      component: MyProfileTrabajador
    },
    { path: '/configuracion', name: 'Configuracion', component: Configuracion },
    {
      path: '/trabajador/configuracion/planes',
      name: 'Planes',
      component: Planes
    }
  ]
});
