// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ConfiguracionCliente from '@/app/cliente/pages/Configuracion-Cliente.vue'
import MyProfileCliente from '@/app/cliente/pages/MyProfile-Cliente.vue'


const routes = [
  {
    path: '/cliente/perfil',
    name: 'ClientePerfil',
    component: MyProfileCliente
  },
  {
    path: '/cliente/configuracion',
    name: 'ClienteConfiguracion',
    component: ConfiguracionCliente
  },
  // ruta por defecto al panel de cliente
  {
    path: '/:catchAll(.*)',
    redirect: '/cliente/configuracion'
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
