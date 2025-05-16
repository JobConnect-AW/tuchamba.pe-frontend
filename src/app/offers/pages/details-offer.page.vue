<script setup>
import { inject, ref } from 'vue'
import { Button } from 'primevue'
import DetailsOfferActiveComponent from '../components/details-offer/details-offer-active.component.vue'
import DetailsOfferPendingComponent from '../components/details-offer/details-offer-pending.component.vue'
import DetailsOfferPendingComponentPay from '../components/details-offer/details-offer-pending-pay.component.vue'
import DetailsOfferFinishedComponentPay from '../components/details-offer/details-offer-finished.component.vue'

const technicians = ref([
  {
    name: 'Juan González',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    reviews: 150,
    profession: 'Electricista',
    price: 50,
    available: true,
  },
  {
    name: 'Teodoro Casanova',
    photo: 'https://randomuser.me/api/portraits/men/47.jpg',
    rating: 4.2,
    reviews: 129,
    profession: 'Electricista',
    price: 50,
    available: true,
  },
  {
    name: 'Gracia Espinoza',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    rating: 5,
    reviews: 150,
    profession: 'Electricista',
    price: 50,
    available: true,
  },
  {
    name: 'Enrique Lopez',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4.2,
    reviews: 129,
    profession: 'Electricista',
    price: 50,
    available: true,
  },
  {
    name: 'Enrique Lopez',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4.2,
    reviews: 129,
    profession: 'Electricista',
    price: 50,
    available: true,
  },
  {
    name: 'Enrique Lopez',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4.2,
    reviews: 129,
    profession: 'Electricista',
    price: 50,
    available: true,
  },
  {
    name: 'Enrique Lopez',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4.2,
    reviews: 129,
    profession: 'Electricista',
    price: 50,
    available: true,
  },
  {
    name: 'Enrique Lopez',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4.2,
    reviews: 129,
    profession: 'Electricista',
    price: 50,
    available: true,
  },
  {
    name: 'Enrique Lopez',
    photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 4.2,
    reviews: 129,
    profession: 'Electricista',
    price: 50,
    available: true,
  },
])

const offer = inject('offer');
console.log(offer.value)
</script>

<template>
  <div class="p-5">

    <DetailsOfferActiveComponent v-if="offer !== ''" />

  </div>
</template>
