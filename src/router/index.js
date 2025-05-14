import { createRouter, createWebHistory } from 'vue-router';

import Home from '../app/userContext/pages/Home.vue';
import BuscarTecnicos from '../app/userContext/pages/BuscarTecnicos.vue';
import Ofertas from '../app/userContext/pages/Ofertas.vue';
import CompararPerfiles from '../app/userContext/pages/CompararPerfiles.vue';
import Configuracion from '../app/userContext/pages/Configuarcion.vue';

const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Inicio' } },
  { path: '/buscar-tecnicos', name: 'buscarTecnicos', component: BuscarTecnicos, meta: { title: 'Buscar Técnicos' } },
  { path: '/ofertas', name: 'ofertas', component: Ofertas, meta: { title: 'Ofertas' } },
  { path: '/comparar-perfiles', name: 'compararPerfiles', component: CompararPerfiles, meta: { title: 'Comparar Perfiles' } },
  { path: '/configuracion', name: 'configuracion', component: Configuracion, meta: { title: 'Configuración' } },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const baseTitle = 'Mi Aplicación Vue';
  document.title = `${baseTitle} | ${to.meta.title || 'Sin Título'}`;
  next();
});

export default router;
