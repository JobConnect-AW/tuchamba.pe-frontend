import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
  ],
})

export default router
