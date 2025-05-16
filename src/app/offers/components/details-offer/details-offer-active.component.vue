<script setup>
import { inject, ref } from 'vue'
import { Button } from 'primevue'

const offer = inject('offer');

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

</script>

<template>
  <div>
    <!-- Título y descripción -->
    <h2 class="text-2xl !font-bold mb-2">Se busca Técnico Electricista a Domicilio</h2>
    <div class="mb-4 text-sm !space-y-1 py-3">
      <span
        class="inline-block bg-orange-400 text-white px-2 py-1 rounded font-semibold text-sm mb-2"
        >Descripción:</span
      >
      <p class="text-gray-700 leading-relaxed text-pretty">
        Estamos en la búsqueda de un electricista calificado para realizar servicios a domicilio de
        instalaciones, mantenimiento y reparaciones eléctricas. El profesional debe tener
        conocimientos en redes eléctricas residenciales y comerciales, detectar fallas, instalar
        luminarias, tomacorrientes, interruptores, y realizar mejoras eléctricas en general.
      </p>
    </div>

    <!-- Grid horizontal con scroll para técnicos -->
    <div class="bg-blue-600 p-4 rounded-lg">
      <div class="gap-6 grid grid-cols-[repeat(auto-fill,_minmax(theme(spacing.40),1fr))] py-3">
        <div
          v-for="(tech, idx) in technicians"
          :key="idx"
          class="bg-white relative rounded-lg p-4 !mt-14 pt-16 flex-shrink-0 flex flex-col items-center text-center"
        >
          <div class="absolute top-0 !-mt-12 flex flex-col items-center gap-2">
            <img
              :src="tech.photo"
              alt="Profile"
              class="rounded-full w-20 h-20 object-cover shadow-[0_0_0_5px_theme(colors.gray.50)]"
            />
            <div
              v-if="tech.available"
              class="absolute bottom-[1.25rem] right-[0.5rem] bg-green-500 border-2 border-white rounded-full w-5 h-5 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p class="text-sm mb-1">{{ tech.name }}</p>
          </div>
          <div class="flex items-center flex-col gap-1 justify-center mb-1">
            <div class="flex">
              <svg
                v-for="i in 5"
                :key="i"
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                :class="i <= Math.floor(tech.rating) ? 'text-yellow-400' : 'text-gray-300'"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z"
                />
              </svg>
            </div>
            <span class="text-[0.7rem] text-gray-500 ml-1">({{ tech.reviews }} Reviews)</span>
          </div>
          <p class="text-xs text-blue-600 mb-2">{{ tech.profession }}</p>
          <p class="text-orange-400 text-xs font-bold mb-2">${{ tech.price }}</p>
          <Button label="Ver propuesta" severity="warn" class="!text-xs !mt-2" />
        </div>
      </div>
    </div>
  </div>
</template>
