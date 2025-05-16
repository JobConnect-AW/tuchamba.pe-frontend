<script setup lang="ts">
import { ref } from 'vue'
import Accordion from 'primevue/accordion'
import AccordionPanel from 'primevue/accordionpanel'
import AccordionHeader from 'primevue/accordionheader'
import AccordionContent from 'primevue/accordioncontent'
import Button from 'primevue/button'
import { OfferPrimitives } from '../domain/entities/offer.entity'

const offers = ref<OfferPrimitives[]>([
  {
    uid: '1',
    userUid: 'u123',
    title: 'Diseño de sitio web',
    description: 'Necesito un sitio web para mi negocio local.',
    technicalCategory: 'Desarrollo Web',
    location: 'Lima, Perú',
    estimatedBudget: 1500,
    paymentMethod: 'Transferencia bancaria',
    requiredExperience: 'Intermedio',
    workSchedule: 'Flexible',
    notificationsAccepted: true,
    personalDataConsent: true,
    createdAt: '2025-05-01',
    updatedAt: '2025-05-10',
  },
  {
    uid: '2',
    userUid: 'u456',
    title: 'Edición de video publicitario',
    description: 'Editar video para campaña en redes.',
    technicalCategory: 'Multimedia',
    location: 'Arequipa, Perú',
    estimatedBudget: 800,
    paymentMethod: 'Yape / Plin',
    requiredExperience: 'Avanzado',
    workSchedule: 'Tardes',
    notificationsAccepted: true,
    personalDataConsent: true,
    createdAt: '2025-04-25',
    updatedAt: '2025-05-05',
  },
])
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
    <Accordion multiple>
      <AccordionPanel v-for="offer in offers" :value="offer.uid" :key="offer.uid">
        <AccordionHeader>
          <article class="flex justify-between w-full pr-2">
            <header>
              <h3 class="text-lg font-semibold">{{ offer.title }}</h3>
              <p class="text-sm text-gray-500">Creado el: {{ offer.createdAt }}</p>
            </header>
            <div class="flex items-center gap-2">
              <span class="text-sm text-gray-700">S/ {{ offer.estimatedBudget }}</span>
              <Button label="Ver propuestas" class="!text-sm" @click="(event) => {
                event.stopPropagation();
                $router.push({ name: 'offer-detail', params: { uid: offer.uid } });
              }" />
            </div>
          </article>
        </AccordionHeader>
        <AccordionContent>
          <p><strong>Descripción:</strong> {{ offer.description }}</p>
          <p><strong>Categoría Técnica:</strong> {{ offer.technicalCategory }}</p>
          <p><strong>Ubicación:</strong> {{ offer.location }}</p>
          <p><strong>Presupuesto Estimado:</strong> S/ {{ offer.estimatedBudget }}</p>
          <p><strong>Método de Pago:</strong> {{ offer.paymentMethod }}</p>
          <p><strong>Experiencia Requerida:</strong> {{ offer.requiredExperience }}</p>
          <p><strong>Horario:</strong> {{ offer.workSchedule }}</p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </div>
</template>
