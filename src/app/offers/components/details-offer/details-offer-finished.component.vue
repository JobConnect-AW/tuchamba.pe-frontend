<script setup lang="ts">
import { Button } from 'primevue';

</script>

<template>
  <section class="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-md">
    <!-- Título -->
    <h2 class="text-blue-700 font-bold text-xl !mb-4 flex items-center gap-2">
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
      Se busca Técnico de Mantenimiento General <span class="text-sm font-normal">(Finalizado)</span>
    </h2>

    <!-- Descripción -->
    <div class="!mb-8 max-w-3xl flex flex-col gap-2">
      <span
        class="inline-block bg-orange-500 text-white w-fit px-3 py-1 rounded font-semibold text-sm mb-2">Descripción:</span>
      <p class="text-gray-700 leading-relaxed">
        Estamos en la búsqueda de un electricista calificado para realizar servicios a domicilio en instalaciones,
        mantenimiento y reparaciones eléctricas. El profesional debe tener conocimientos en redes eléctricas
        residenciales y comerciales, detectar fallas, instalar luminarias, tomacorrientes, interruptores, y realizar
        mejoras eléctricas en general.
      </p>
    </div>

    <div class="flex flex-col md:flex-row gap-6">
      <!-- Trabajador Encargado -->
      <article class="flex w-1/4 flex-col gap-2">
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
      </article>

      <div class="bg-white flex-1 rounded-lg shadow p-6 flex flex-col">
        <h2 class="text-orange-500 !font-bold text-xl flex items-center gap-2">
          Tu comentario sobre el trabajo
        </h2>
        <div class="flex flex-col pt-6 gap-4 flex-1">
          <article class="flex gap-4"> <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="KaiB"
              class="w-14 h-14 rounded-full object-cover" />
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-1">
                <span class="font-semibold">KaiB</span>
                <span class="text-xs text-gray-400">• 22 Jul</span>
                <span class="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">Verified</span>
                <div class="flex text-yellow-400 !ml-auto">
                  <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="size-5"
                    :class="i <= 3 ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                  </svg>
                </div>
              </div>
              <p class="text-gray-700 text-sm leading-relaxed">
                KaiB was amazing with our cats!! 🌟🌟🌟 This was our first time using a pet-sitting service, so we were
                naturally quite anxious. We took a chance on Kai and completely lucked out! We booked Kai to come twice
                a
                day for three days.
              </p>
            </div>
          </article>
          <div class="flex flex-row gap-2">
            <Button label="Ver perfil del trabajador" class="flex-1" />
            <Button label="Ver más comentarios" severity="warn" class="flex-1" />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
