<script setup>
import { ref, computed, onMounted, provide } from 'vue'
import { useRoute } from 'vue-router'
import { GetOfferByUidUseCase } from '../application/use-cases/get-offer-by-uid.usecase'
import ApiOfferRepository from '../infrastructure/repositories/api-offer.repository'
import { HttpService } from '@/app/shared/infrastructure/services/http.service'

const route = useRoute()
const offer = ref(null)
provide('offer', offer)
const apiOfferRepository = new ApiOfferRepository(new HttpService())

const isNewOfferPath = computed(() => route.path === '/offers/offer/new')

const isOfferActive = computed(() => !isNewOfferPath.value && offer.value?.status === 'active')
const isOfferPending = computed(() => !isNewOfferPath.value && offer.value?.status === 'pending')
const isOfferFinished = computed(() => !isNewOfferPath.value && offer.value?.status === 'finished')

// Fetch offer data if we're on a specific offer page
onMounted(async () => {
  if (!isNewOfferPath.value && route.params.uid) {
    try {
      // Replace this with your actual API call
      const offerByUid = await new GetOfferByUidUseCase(apiOfferRepository).execute(
        route.params.uid,
      )
      offer.value = offerByUid
    } catch (error) {
      console.error('Error fetching offer:', error)
    }
  }
})
</script>

<template>
  <section class="p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
    <header class="mb-6">
      <div class="flex items-center justify-between">
        <Button
          class="px-4 py-2 rounded font-semibold"
          :class="isNewOfferPath ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500'"
          :disabled="!isNewOfferPath"
        >
          Crear Oferta
        </Button>
        <div class="h-[0.25rem] bg-gray-300 flex-1"></div>
        <Button
          class="px-4 py-2 rounded font-semibold"
          :class="isOfferActive ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500'"
          :disabled="isNewOfferPath || !isOfferActive"
        >
          Activa
        </Button>
        <div class="h-[0.25rem] bg-gray-300 flex-1"></div>
        <Button
          class="px-4 py-2 rounded font-semibold"
          :class="isOfferPending ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500'"
          :disabled="isNewOfferPath || !isOfferPending"
        >
          Pendiente
        </Button>
        <div class="h-[0.25rem] bg-gray-300 flex-1"></div>
        <Button
          class="px-4 py-2 rounded font-semibold"
          :class="isOfferFinished ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-500'"
          :disabled="isNewOfferPath || !isOfferFinished"
        >
          Finalizada
        </Button>
      </div>
    </header>
    <div>
      <router-view />
    </div>
  </section>
</template>
