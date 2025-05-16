<script setup>
import { ref, computed, onMounted, provide } from 'vue'
import { useRoute } from 'vue-router'
import { GetOfferByUidUseCase } from '../../offers/application/use-cases/get-offer-by-uid.usecase'
import ApiOfferRepository from '../../offers/infrastructure/repositories/api-offer.repository'
import { HttpService } from '@/app/shared/infrastructure/services/http.service'
import { Button } from 'primevue'

const route = useRoute()
const offer = ref(null)
provide('offer', offer)

const apiOfferRepository = new ApiOfferRepository(new HttpService())

const isNewOfferPath = computed(() => route.path === '/trabajador/oferta/crear')

const isOfferActive = computed(() => !isNewOfferPath.value && offer.value?.status === 'active')
const isOfferPending = computed(() => !isNewOfferPath.value && offer.value?.status === 'pending')
const isOfferFinished = computed(() => !isNewOfferPath.value && offer.value?.status === 'finished')
</script>

<template>
  <section class="px-6 bg-white py-2 flex flex-col gap-4 pb-4">
    <div class="flex items-center justify-between">
      <Button class="px-4 py-2 rounded font-semibold"
        :class="isNewOfferPath ? 'bg-blue-600 text-white' : '!bg-gray-300 !border-gray-100 !text-gray-500'"
        :disabled="!isNewOfferPath">
        Oferta inicial
      </Button>
      <div class="h-[0.25rem] bg-gray-300 flex-1"></div>
      <Button class="px-4 py-2 rounded font-semibold"
        :class="isOfferActive ? 'bg-blue-600 text-white' : '!bg-gray-300 !border-gray-100 !text-gray-500'"
        :disabled="isNewOfferPath || !isOfferActive">
        Pendiente
      </Button>
      <div class="h-[0.25rem] bg-gray-300 flex-1"></div>
      <Button class="px-4 py-2 rounded font-semibold"
        :class="isOfferPending ? 'bg-blue-600 text-white' : '!bg-gray-300 !border-gray-100 !text-gray-500'"
        :disabled="isNewOfferPath || !isOfferPending">
        Finalizado
      </Button>
      <div class="h-[0.25rem] bg-gray-300 flex-1"></div>
      <Button class="px-4 py-2 rounded font-semibold"
        :class="isOfferFinished ? 'bg-blue-600 text-white' : '!bg-gray-300 !border-gray-100 !text-gray-500'"
        :disabled="isNewOfferPath || !isOfferFinished">
        Reseñas
      </Button>
    </div>
    <router-view />
  </section>
</template>
