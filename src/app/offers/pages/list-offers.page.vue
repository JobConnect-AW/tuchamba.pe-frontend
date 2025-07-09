<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Button from 'primevue/button'
import { OfferPrimitives } from '../domain/entities/offer.entity'
import { ApiOfferRepository } from '../infrastructure/repositories/api-offer.repository'
import { HttpService } from '@/app/shared/infrastructure/services/http.service'
import { AuthService } from '@/app/shared/infrastructure/services/auth.service'
import { useRouter } from 'vue-router'

const router = useRouter()
const offers = ref<OfferPrimitives[]>([])
const isLoading = ref(false)
const errorMessage = ref('')

// Servicios
const httpService = HttpService.getInstance()
const authService = new AuthService()
const apiOfferRepository = new ApiOfferRepository(httpService)

async function loadOffers() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const userData = authService.getUserData()
    if (!userData) {
      errorMessage.value = 'Debes iniciar sesión para ver tus ofertas'
      router.push('/login')
      return
    }

    const userOffers = await apiOfferRepository.getAllOffersByUserUid(userData.uid)
    offers.value = userOffers.map(offer => offer.toPrimitives()).reverse()
  } catch (error) {
    console.error('Error al cargar ofertas:', error)
    errorMessage.value = 'Error al cargar las ofertas. Inténtalo de nuevo.'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  loadOffers()
})
</script>

<template>
  <div class="flex flex-col gap-2 p-4">
    <div class="flex justify-between items-center !mb-2">
      <div class="flex flex-col">
        <h2 class="text-2xl !font-semibold mb-4">Mis Ofertas</h2>
        <p class="text-gray-600 mb-6">
          Aquí puedes ver todas las ofertas que has creado. Haz clic en cada oferta para ver más
          detalles.
        </p>
      </div>
      <Button label="Crear Nueva Oferta" severity="warn"
        @click="$router.push({ name: 'new-offer' })" />
    </div>

    <div v-if="errorMessage" class="error-message w-full">
      {{ errorMessage }}
      <Button label="Reintentar" @click="loadOffers" class="ml-2" size="small" />
    </div>

    <div v-if="isLoading" class="flex justify-center items-center py-8">
      <div class="text-gray-600">Cargando ofertas...</div>
    </div>

    <div v-else-if="offers.length > 0">
      <Accordion multiple>
        <AccordionPanel v-for="offer in offers" :value="offer.uid" :key="offer.uid">
          <AccordionHeader>
            <article class="flex justify-between w-full pr-2">
              <header>
                <h3 class="text-lg font-semibold">{{ offer.title }}</h3>
                <p class="text-sm text-gray-500">Creado el: {{ offer.startAt || offer.createdAt }}</p>
              </header>
              <div class="flex items-center gap-2">
                <span class="text-sm text-gray-700">S/ {{ offer.amount || offer.estimatedBudget }}</span>
                <Button label="Ver propuestas" class="!text-sm" @click="(event) => {
                  event.stopPropagation();
                  $router.push({ name: 'offer-detail', params: { uid: offer.uid } });
                }" />
              </div>
            </article>
          </AccordionHeader>
          <AccordionContent>
            <p><strong>Descripción:</strong> {{ offer.description }}</p>
            <p><strong>Categoría:</strong> {{ offer.category || offer.technicalCategory }}</p>
            <p><strong>Duración:</strong> {{ offer.duration || offer.location }}</p>
            <p><strong>Presupuesto:</strong> S/ {{ offer.amount || offer.estimatedBudget }}</p>
            <p><strong>Método de Pago:</strong> {{ offer.paymentMethod }}</p>
            <p><strong>Experiencia Mínima:</strong> {{ offer.minimumExperience || offer.requiredExperience }}</p>
            <p><strong>Horario:</strong> {{ offer.workSchedule }}</p>
            <p v-if="offer.status"><strong>Estado:</strong> {{ offer.status }}</p>
            <p v-if="offer.proposalsCount !== undefined"><strong>Propuestas:</strong> {{ offer.proposalsCount }}</p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>

    <div v-else-if="!isLoading && !errorMessage" class="text-center py-8">
      <p class="text-gray-600 mb-4">No tienes ofertas creadas aún.</p>
      <Button label="Crear tu primera oferta" severity="warn"
        @click="$router.push({ name: 'new-offer' })" />
    </div>
  </div>
</template>

<style scoped>
.error-message {
  background-color: #fee2e2;
  color: #dc2626;
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  border: 1px solid #fecaca;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
