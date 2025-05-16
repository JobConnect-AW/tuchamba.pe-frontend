<script setup>
import { inject, ref } from 'vue'
import Card from 'primevue/card'
import { Button, Slider } from 'primevue';

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

const formatHour = (hour24) => {
  const period = hour24 >= 12 ? 'pm' : 'am'
  const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12
  return `${hour12}:00 ${period}`
}

</script>

<template>
  <section class="p-6 bg-gray-100 rounded-lg max-w-5xl mx-auto">
    <h2 class="text-blue-700 !font-bold text-lg !mb-4 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
        <path d="m8 6 2-2" />
        <path d="m18 16 2-2" />
        <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
        <path
          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
        <path d="m15 5 4 4" />
      </svg>
      Se busca Técnico de Mantenimiento General
      <span class="text-sm !font-normal">(En Progreso)</span>
    </h2>

    <div class="!mb-6">
      <span class="inline-block bg-orange-500 text-white px-3 py-1 rounded font-semibold text-sm">Descripción:</span>
      <p class="!mt-2 text-gray-700 leading-relaxed">
        Estamos en la búsqueda de un electricista calificado para realizar servicios a domicilio en
        instalaciones, mantenimiento y reparaciones eléctricas. El profesional debe tener
        conocimientos en redes eléctricas residenciales y comerciales, detectar fallas, instalar
        luminarias, tomacorrientes, interruptores, y realizar mejoras eléctricas en general.
      </p>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <!-- Trabajador Encargado -->
      <div class="flex w-1/4 flex-col gap-2">
        <h2 class="!text-xl text-primary-600 !font-bold">Trabajador Encargado</h2>
        <article
          class="w-full flex-1 bg-white rounded-lg shadow-md flex flex-col items-center text-center overflow-hidden">
          <header class="h-36 relative w-full overflow-hidden rounded-t-lg">
            <img src="https://picsum.photos/200" class="object-cover aspect-3/2 w-full h-full" alt="Teodoro Casanova" />
          </header>
          <div class="flex-1 w-full">
            <div class="bg-blue-600 w-full">
              <h3 class="font-bold !text-base text-gray-50">Teodoro Casanova</h3>
            </div>
            <div class="w-full p-3">
              <p class="text-gray-600 text-start text-sm">Electricista</p>
              <div class="flex items-center justify-start !mt-1 gap-1 text-yellow-400 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.757 4.635 1.123 6.545z" />
                </svg>
                <span class="text-gray-800 font-semibold text-xs">4.7</span>
                <span class="text-gray-600 text-xs">( +200 calificaciones )</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- Detalles del Proyecto -->
      <div class="flex-1 bg-blue-600 text-white rounded-lg p-6 shadow-md flex flex-col md:flex-row gap-6 md:gap-12">
        <div class="flex-1">
          <h4 class="!font-semibold !mb-2 !text-[1.5rem]">Detalles del Proyecto:</h4>
          <div class="mb-3">
            <h3 class="font-semibold text-base">Horario de Trabajo</h3>
            <div class="py-4 bg-blue-600 rounded-lg w-80 mx-auto">
              <Slider v-model="timeRange" :min="6" :max="22" :step="1" range class="w-full"
                :style="{ height: '8px' }" />

              <div class="flex justify-between mt-2 text-white font-mono text-sm select-none px-1">
                <span>{{ formatHour(timeRange[0]) }}</span>
                <span>{{ formatHour(timeRange[1]) }}</span>
              </div>
            </div>
          </div>

          <div class="!mb-3">
            <h4 class="!font-semibold text-lg">Dirección</h4>
            <p class="text-sm">Calle Monte de Oca 191</p>
          </div>

          <div>
            <h4 class="!font-semibold text-lg">Presupuesto</h4>
            <p class="text-sm">450 soles - 500 soles (Sujeto a eventualidades)</p>
          </div>
        </div>

        <div class="flex-1">
          <p class="font-semibold mb-2">Mapa Geográfico</p>
          <img src="https://picsum.photos/200" alt="Mapa Geográfico"
            class="rounded shadow-md w-full h-48 object-cover" />
        </div>
      </div>
    </div>

    <div class="flex gap-4 !mt-8 justify-end">
      <Button severity="warn" class="">
        Pagar trabajo
      </Button>
      <Button severity="warn">
        Chatea con el trabajador
      </Button>
    </div>
  </section>
</template>
