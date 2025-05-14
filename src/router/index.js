// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Configuracion from '@/app/trabajador/views/Configuracion.vue'
import MyProfileTrabajador from '@/app/trabajador/views/MyProfile-Trabajador.vue'
import Planes from '@/app/trabajador/views/Planes.vue';


const routes = [
  // ...tus otras rutas
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

export default createRouter({
  history: createWebHistory(),
  routes
})
