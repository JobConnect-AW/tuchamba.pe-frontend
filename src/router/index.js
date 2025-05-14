import { createRouter, createWebHistory } from 'vue-router'
import CompareProfiles from '@/app/public/CompareProfiles.vue'
import WorkerDashboard from '@/app/dashboard/pages/WorkerDashboard.vue'
import CustomerDashboard from '@/app/dashboard/pages/CustomerDashboard.vue'
import Configuracion from '@/app/trabajador/views/Configuracion.vue';
import MyProfileTrabajador from '@/app/trabajador/views/MyProfile-Trabajador.vue';
import Planes from '@/app/trabajador/views/Planes.vue';
import SearchOffers from '@/app/offers/pages/SearchOffers.vue';
import CompararPerfiles from '@/app/userContext/pages/CompararPerfiles.vue';
import Home from '@/app/userContext/pages/Home.vue';
import BuscarTecnicos from '@/app/userContext/pages/BuscarTecnicos.vue';
import Ofertas from '@/app/userContext/pages/Ofertas.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      children: [
        { path: 'comparar', component: CompareProfiles },
        { path: '', redirect: '/comparar' },
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
    },
    {
      path: '/search-offers',
      component: SearchOffers
    },
    { path: '/', name: 'home', component: Home, meta: { title: 'Inicio' } },
    { path: '/buscar-tecnicos', name: 'buscarTecnicos', component: BuscarTecnicos, meta: { title: 'Buscar Técnicos' } },
    { path: '/ofertas', name: 'ofertas', component: Ofertas, meta: { title: 'Ofertas' } },
    { path: '/comparar-perfiles', name: 'compararPerfiles', component: CompararPerfiles, meta: { title: 'Comparar Perfiles' } },
    { path: '/configuracion', name: 'configuracion', component: Configuracion, meta: { title: 'Configuración' } },
    { path: '/:pathMatch(.*)*', redirect: '/' },
    {
      path: '/offers',
      name: 'offers',
      children: [
        {
          path: '',
          name: 'list',
          component: () => import('../app/offers/pages/list-offers.page.vue'),
        },
        {
          path: 'offer',
          name: 'offer',
          component: () => import('../app/offers/layouts/offer-page.layout.vue'),
          children: [
            {
              path: 'new',
              name: 'new-offer',
              component: () => import('../app/offers/pages/create-offer.page.vue'),
            },
            {
              path: ':id',
              name: 'offer-detail',
              component: () => import('../app/offers/pages/details-offer.page.vue'),
            },
          ],
        },
      ],
    },
  ]
});


router.beforeEach((to, from, next) => {
  const baseTitle = 'Mi Aplicación Vue';
  document.title = `${baseTitle} | ${to.meta.title || 'Sin Título'}`;
  next();
});

export default router;
