import { createRouter, createWebHistory } from 'vue-router'
import CompareProfiles from '@/app/public/CompareProfiles.vue'
import WorkerDashboard from '@/app/worker/views/WorkerDashboard.vue'
import CustomerDashboard from '@/app/customer/pages/CustomerDashboard.vue'
import Configuracion from '@/app/worker/views/Configuracion.vue';
import MyProfileTrabajador from '@/app/worker/views/MyProfile-Trabajador.vue';
import Planes from '@/app/worker/views/Planes.vue';
import SearchOffers from '@/app/offers/pages/SearchOffers.vue';
import CompararPerfiles from '@/app/userContext/pages/CompararPerfiles.vue';
import Home from '@/app/userContext/pages/Home.vue';
import BuscarTecnicos from '@/app/userContext/pages/BuscarTecnicos.vue';
import PagoPlan from '@/app/worker/views/PagoPlan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Iniciar Sesión',
      component: () => import('@/app/auth/pages/Login.vue'),
    },
    {
      path: '/sign-up',
      name: 'Registrarse',
      component: () => import('@/app/auth/pages/SignUp.vue'),
    },
    {
      path: '/password-recovery',
      name: 'Recuperar Contraseña',
      component: () => import('@/app/auth/pages/PasswordRecovery.vue'),
    },
    {
      path: '/dashboard',
      children: [
        { path: 'worker', component: WorkerDashboard },
        { path: 'customer', component: CustomerDashboard }
      ]
    },
    {
      path: '/perfil-trabajador',
      name: 'PerfilTrabajador',
      component: MyProfileTrabajador
    },
    { path: '/configuracion', name: 'configuracion', component: Configuracion, meta: { title: 'Configuración' } },
    {
      path: '/trabajador/configuracion/planes',
      component: Planes,
      name: 'Planes'
    },
    {
      path: '/trabajador/configuracion/planes/pago/:plan',       // ➜ /trabajador/configuracion/planes/pago/basic
      name: 'PagoPlan',
      component: PagoPlan,
      meta: { title: 'Pago' }
    },
    {
      path: '/search-offers',
      component: SearchOffers
    },
    { path: '/', name: 'home', component: CustomerDashboard, meta: { title: 'Inicio' } },
    { path: '/buscar-tecnicos', name: 'buscarTecnicos', component: BuscarTecnicos, meta: { title: 'Buscar Técnicos' } },
    { path: '/comparar-perfiles', name: 'compararPerfiles', component: CompareProfiles, meta: { title: 'Comparar Perfiles' } },
    { path: '/configuracion', name: 'configuracion', component: Configuracion, meta: { title: 'Configuración' } },
    {
      path: '/cliente',
      name: 'customer',
      children: [
        {
          path: 'ofertas',
          name: 'offers',
          children: [
            {
              path: '',
              name: 'offers-list',
              component: () => import('../app/offers/pages/list-offers.page.vue'),
            },
            {
              path: 'oferta',
              name: 'offer',
              component: () => import('../app/offers/layouts/offer-page.layout.vue'),
              children: [
                {
                  path: 'crear',
                  name: 'new-offer',
                  component: () => import('../app/offers/pages/create-offer.page.vue'),
                },
                {
                  path: ':uid',
                  name: 'offer-detail',
                  component: () => import('../app/offers/pages/details-offer.page.vue'),
                },
              ],
            },
          ],
          meta: { title: 'Ofertas' }
        },
      ]
    },
    {
      path: '/trabajador',
      name: 'worker',
      children: [
        {
          path: '/proposal',
          name: 'proposal',
          component: () => import('../app/proposals/layouts/proposal-page.layout.vue'),
          children: [
            {
              path: '',
              component: () => import('../app/offers/pages/offer-for-proposal.page.vue'),
            },
          ],
          meta: { title: 'Propuesta' }
        },
      ]
    }
  ]
});


router.beforeEach((to, from, next) => {
  const baseTitle = 'Tu Chamba.pe';
  document.title = `${baseTitle} | ${to.meta.title || 'Sin Título'}`;
  next();
});

export default router;
