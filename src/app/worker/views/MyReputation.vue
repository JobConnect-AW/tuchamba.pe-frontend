<template>
  <div class="p-6 bg-gray-50 rounded-lg shadow-md">
    <!-- Resumen General -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div class="flex-1 bg-white p-4 rounded shadow">
        <h2 class="text-lg font-semibold flex items-center gap-2">
          Resumen General
        </h2>
        <div class="mt-4">
          <p class="flex justify-between">
            <span>Calificación Promedio:</span>
            <span class="font-bold text-blue-600">4.6</span>
          </p>
          <p class="flex justify-between">
            <span>Total de opiniones:</span>
            <span class="font-bold">28</span>
          </p>
          <p class="flex justify-between">
            <span>Clientes satisfechos:</span>
            <span class="font-bold">24</span>
          </p>
          <p class="flex justify-between">
            <span>Reportes negativos:</span>
            <span class="font-bold text-red-500">1</span>
          </p>
        </div>
      </div>

      <!-- Valoraciones Detalladas -->
      <div class="flex-1 bg-white p-4 rounded shadow">
        <h2 class="text-lg font-semibold flex items-center gap-2">
          Valoraciones Detalladas
        </h2>
        <div class="mt-4 space-y-2">
          <div v-for="star in ratings" :key="star.stars" class="flex items-center gap-2">
            <div>
              <span>{{ '⭐'.repeat(star.stars) }}</span>

            </div>
            <div class="flex-1 bg-gray-200 rounded h-2">
              <div
                class="bg-blue-500 h-2 rounded"
                :style="{ width: star.percentage + '%' }"
              ></div>
            </div>
            <span>{{ star.stars }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Comentarios Recibidos -->
    <div class="bg-white p-4 rounded shadow">
      <h2 class="text-lg font-semibold flex items-center gap-2">
        Comentarios recibidos
      </h2>
      <div class="mt-4 space-y-4">
        <div
          v-for="(comment, index) in comments"
          :key="index"
          class="border rounded p-3 flex flex-col md:flex-row gap-3 items-start md:items-center"
        >
          <div class="flex items-center gap-2">
            <img
              :src="comment.avatar"
              alt="User avatar"
              class="w-10 h-10 rounded-full"
            />
            <div>
              <p class="font-bold">{{ comment.name }}</p>
              <p class="text-sm text-gray-500">{{ comment.date }} • <span class="bg-gray-200 px-1 rounded text-xs">Verified</span></p>
            </div>
          </div>
          <p class="flex-1 text-gray-700 mt-2 md:mt-0">
            {{ comment.text }}
          </p>
          <div class="flex gap-1">
            <span v-for="n in 5" :key="n">⭐</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const ratings = [
  { stars: 5, percentage: 100 },
  { stars: 4, percentage: 80 },
  { stars: 3, percentage: 60 },
  { stars: 2, percentage: 40 },
  { stars: 1, percentage: 20 },
];

const comments = [
  {
    name: 'KaiB',
    date: '22 Jul',
    avatar: 'https://via.placeholder.com/40',
    text: `KaiB was amazing with our cats!! ✨🐾 This was our first time using a pet-sitting service, so we were naturally quite anxious. We took a chance on Kai and completely lucked out! We booked Kai to come twice a day for three days.`,
  },
  {
    name: 'KaiB',
    date: '22 Jul',
    avatar: 'https://via.placeholder.com/40',
    text: `KaiB was amazing with our cats!! ✨🐾 This was our first time using a pet-sitting service, so we were naturally quite anxious. We took a chance on Kai and completely lucked out! We booked Kai to come twice a day for three days.`,
  },
  {
    name: 'KaiB',
    date: '22 Jul',
    avatar: 'https://via.placeholder.com/40',
    text: `KaiB was amazing with our cats!! ✨🐾 This was our first time using a pet-sitting service, so we were naturally quite anxious. We took a chance on Kai and completely lucked out! We booked Kai to come twice a day for three days.`,
  },
];
</script>

<style scoped>



</style>
