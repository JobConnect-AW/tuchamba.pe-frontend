<template>
  <div class="max-w-2xl mx-auto rounded-lg overflow-hidden border border-blue-200 shadow-md">
    <!-- Header -->
    <div class="bg-white p-4 border-b border-blue-100">
      <div class="flex items-center gap-2">
        <div class="bg-blue-100 p-2 rounded-md">
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
        </div>
        <h2 class="text-xl font-bold text-gray-800">{{ job.title }}</h2>
      </div>
    </div>

    <!-- Description -->
    <div class="bg-amber-50 p-3">
      <div class="mb-1">
        <span class="bg-amber-400 text-white px-2 py-1 rounded text-sm font-medium">Descripción:</span>
      </div>
      <p class="text-gray-700 text-sm">
        {{ job.description }}
      </p>
    </div>

    <!-- Main content with two columns -->
    <div class="flex flex-col md:flex-row">
      <!-- Left column -->
      <div class="bg-blue-500 text-white p-4 md:w-1/2">
        <div class="mb-4">
          <h3 class="font-bold">Categoría de Servicio:</h3>
          <p>{{ job.category }}</p>
        </div>

        <div class="mb-4">
          <h3 class="font-bold">Dirección:</h3>
          <p>{{ job.address }}</p>
        </div>

        <div class="mb-4">
          <h3 class="font-bold">Presupuesto Estimado:</h3>
          <p>{{ job.budget }}</p>
        </div>

        <div class="mb-4">
          <h3 class="font-bold">Método de Pago:</h3>
          <p>{{ job.paymentMethod }}</p>
        </div>

        <div>
          <h3 class="font-bold">Idioma Requerido:</h3>
          <p>{{ job.language }}</p>
        </div>
      </div>

      <!-- Right column -->
      <div class="bg-white p-4 md:w-1/2">
        <div class="mb-4">
          <h3 class="font-bold text-gray-700">Experiencia Mínima Requerida:</h3>
          <p class="text-gray-600">{{ job.experience }}</p>
        </div>

        <div class="mb-4">
          <h3 class="font-bold text-gray-700">Certificaciones Requeridas:</h3>
          <p class="text-gray-600">{{ job.certifications }}</p>
        </div>

        <div class="mb-4">
          <h3 class="font-bold text-gray-700">Horario de Trabajo:</h3>
          <p class="text-gray-600">{{ job.workHours }}</p>
        </div>

        <!-- Map section -->
        <div>
          <h3 class="font-bold text-gray-700 mb-2">Mapa Geográfico</h3>
          <div class="w-full h-32 bg-gray-200 rounded overflow-hidden">
            <!--<img src="/api/placeholder/200/120" alt="Mapa de ubicación" class="w-full h-full object-cover" />-->
          </div>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="bg-white p-4 flex flex-col md:flex-row justify-end gap-4">
      <button @click="apply"
        class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
        POSTULAR
      </button>
      <button @click="reject"
        class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-6 rounded-full transition-colors">
        RECHAZAR
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

// Component name is inferred from filename in Vue 3
// Data now uses reactive for complex objects
const job = reactive({
  title: 'Instalación eléctrica en local comercial',
  description: 'Se requiere un electricista con experiencia para la instalación completa de cableado, tomacorrientes y luminarias en un pequeño local de 50 m² en Surquillo. Se proporcionarán los materiales.',
  category: 'Electricista',
  address: 'Calle Monte de Oca 191',
  budget: 's/. 1000 - s/. 1500',
  paymentMethod: 'Yape',
  language: 'Español',
  experience: 'Más de 3 años',
  certifications: 'Institución Técnica',
  workHours: '11:00 am - 02:00 pm'
});

// Methods are now defined as standalone functions
function apply() {
  // Lógica para postular al trabajo
  console.log('Postulando al trabajo');
}

function reject() {
  // Lógica para rechazar el trabajo
  console.log('Rechazando el trabajo');
}
</script>
