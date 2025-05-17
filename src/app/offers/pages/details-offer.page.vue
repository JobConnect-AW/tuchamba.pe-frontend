<script setup>
import { inject, ref } from 'vue'
import { Button } from 'primevue'
import DetailsOfferActiveComponent from '../components/details-offer/details-offer-active.component.vue'
import DetailsOfferPendingComponent from '../components/details-offer/details-offer-pending.component.vue'
import DetailsOfferPendingComponentPay from '../components/details-offer/details-offer-pending-pay.component.vue'
import DetailsOfferFinishedComponentPay from '../components/details-offer/details-offer-finished.component.vue'

const offer = inject('offer');
</script>

<template>
  <div class="p-5">

    <DetailsOfferActiveComponent v-if="offer !== ''" />

  </div>
</template>
