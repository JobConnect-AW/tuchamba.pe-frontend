<template>
  <div class="p-6 bg-gray-50 min-h-screen">
    <!-- Tabs superiores -->
    <div class="flex gap-2 mb-6">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="selectedTab = tab"
        :class="[
          'px-4 py-2 rounded-full text-sm font-medium',
          selectedTab === tab
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-600 cursor-pointer'
        ]"
      >
        {{ tab }}
      </button>
    </div>

    <!-- Título -->
    <h1 class="text-xl font-bold flex items-center gap-2 mb-2">
      🛠️ Instalación eléctrica en local comercial
    </h1>

    <!-- Descripción -->
    <div class="bg-gray-100 p-3 rounded mb-4">
      <p class="text-orange-600 font-semibold mb-1">Descripción:</p>
      <p class="text-gray-700">
        Se requiere un electricista con experiencia para la instalación completa
        de cableado, tomacorrientes y luminarias en un pequeño local de 50 m² en
        Surquillo. Se proporcionarán los materiales.
      </p>
    </div>

    <!-- Datos técnicos -->
    <div class="flex flex-col lg:flex-row gap-4">
      <!-- Panel de información -->
      <div class="flex-1 bg-blue-500 text-white p-4 rounded space-y-2">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p class="font-semibold">Categoría de Servicio:</p>
            <p>Electricista</p>
          </div>
          <div>
            <p class="font-semibold">Experiencia Mínima Requerida:</p>
            <p>Más de 3 años</p>
          </div>
          <div>
            <p class="font-semibold">Dirección:</p>
            <p>Calle Monte de Oca 191</p>
          </div>
          <div>
            <p class="font-semibold">Certificaciones Requeridas:</p>
            <p>Institución Técnica</p>
          </div>
          <div>
            <p class="font-semibold">Presupuesto Estimado:</p>
            <p>S/. 1000 - S/. 1500</p>
          </div>
          <div>
            <p class="font-semibold">Horario de Trabajo:</p>
            <p>11:00 am - 02:00 pm</p>
          </div>
          <div>
            <p class="font-semibold">Método de Pago:</p>
            <p>Yape</p>
          </div>
          <div>
            <p class="font-semibold">Idioma Requerido:</p>
            <p>Español</p>
          </div>
        </div>

        <!-- Mapa -->
        <div class="mt-4">
          <p class="font-semibold text-center mb-2">Mapa Geográfico</p>
          <img
            src="https://maps.googleapis.com/maps/api/staticmap?center=-12.1191,-77.034&zoom=16&size=400x200&key=YOUR_API_KEY"
            alt="Mapa"
            class="w-full rounded"
          />
        </div>
      </div>

      <!-- Botones de acción -->
      <div class="flex flex-col gap-3 lg:w-40">
        <button
          class="bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600"
          @click="apply"
        >
          POSTULAR
        </button>
        <button
          class="bg-orange-500 text-white py-3 rounded font-semibold hover:bg-orange-600"
          @click="reject"
        >
          RECHAZAR
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ["Mis Postulaciones", "Pendiente", "Finalizado", "Reseñas"];
const selectedTab = ref(tabs[0]);

function apply() {
  console.log("Postular a la oferta...");
}

function reject() {
  console.log("Rechazar la oferta...");
}
</script>

<style scoped>
/* Si no usas Tailwind, puedes agregar CSS puro aquí */
</style>
