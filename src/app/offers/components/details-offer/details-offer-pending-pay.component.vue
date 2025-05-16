<script setup>
import { inject, ref } from 'vue'
import Card from 'primevue/card'
import { Button, Checkbox, Dialog, Slider } from 'primevue';
import { RouterLink } from 'vue-router';

const offer = inject('offer')

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
]);

const timeRange = ref([11, 14]);
const visible = ref(false);

const formatHour = (hour24) => {
  const period = hour24 >= 12 ? 'pm' : 'am'
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12
  return `${hour12}:00 ${period}`
}

</script>

<template>
  <div class="flex flex-col md:flex-row max-w-5xl mx-auto p-6 gap-6 bg-gray-50 rounded-lg shadow-md">

    <div class="flex-1 bg-white rounded-xl shadow p-6">
      <div class="flex justify-between items-center !mb-4 border-b pb-2">
        <span class="text-sm font-semibold uppercase tracking-wider text-gray-600">Pago</span>
        <span class="text-blue-600 font-semibold text-sm">James Cooper</span>
      </div>

      <h3 class="font-semibold uppercase text-gray-700 !mb-2 text-xs">Revisar y realizar pedido</h3>

      <div class="bg-gray-200 rounded-md p-4 text-gray-700 text-sm">
        Verifica tu información y haz clic en <strong>Realizar pedido</strong>
      </div>
    </div>

    <!-- Derecha -->
    <div class="w-full md:w-96 bg-white rounded-xl shadow px-6 py-10 flex flex-col items-center gap-6">
      <div class="text-4xl font-light text-gray-900">PEN 80,00</div>

      <div class="text-sm text-gray-500 !mb-1">Número de cuenta: 21 41 8798 45869</div>

      <div class="bg-gray-100 rounded-md p-4 shadow-sm w-full">
        <h4 class="font-semibold text-gray-900">Teodoro Casanova</h4>
        <p class="text-gray-600 text-sm">Electricista</p>
      </div>

      <label class="flex items-start gap-2 text-gray-600 text-xs leading-tight">
        <Checkbox binary class="mt-1" />
        <span>
          Haz clic aquí para aceptar compartir tu correo electrónico con JobConnect. usará tu dirección de correo
          electrónico para marketing y otros fines de acuerdo con su
          <RouterLink href="#" class="!text-blue-600 hover:!bg-white underline">política de privacidad</RouterLink>, por
          lo que te
          recomendamos que la leas.
        </span>
      </label>

      <Button severity="warn" @click="visible = true"
        class="mt-auto w-1/2 shadow-md font-semibold py-3 rounded transition">
        Confirmar
      </Button>

      <Dialog v-model:visible="visible" modal header="Pago confirmado" :style="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block !mb-2">
          ¡Realizaste el pago de la oferta!
        </span>

        <span class="text-surface-500 dark:text-surface-400 block !mb-4">
          Revisaremos nuestra cuenta bancaria para confirmar tu transferencia de <strong class="!font-bold">PEN 80,00</strong> y te notificaremos cuando hayamos verificado el pago.
        </span>

        <div class="flex justify-end gap-2">
          <Button type="button" label="Save" @click="visible = false">
            Continuar
          </Button>
        </div>
      </Dialog>
    </div>
  </div>
</template>
