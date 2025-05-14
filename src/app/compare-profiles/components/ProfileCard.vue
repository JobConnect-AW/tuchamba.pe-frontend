<template>
  <div class="card bg-white rounded-lg shadow-md overflow-hidden flex flex-col profile-card">
    <div class="relative">
      <img :src="profile.image" alt="" class="w-full h-48 object-cover" />
      <div class="absolute bottom-0 w-full bg-blue-600 text-white text-center py-2 font-semibold">
        {{ profile.name }}
      </div>
    </div>
    <div class="p-4 flex-1 flex flex-col gap-2">
      <div class="text-lg font-medium">{{ profile.role }}</div>
      <div class="text-sm text-gray-600">
        <span class="font-medium">Disponibilidad:</span>
        {{ profile.availability[0] }} - {{ profile.availability[1] }}
      </div>
      <div class="text-sm">
        <span class="font-medium">Valoración:</span>
        ⭐ {{ profile.rating }} ({{ profile.reviews }})
      </div>
      <div class="text-sm flex-1">
        <span class="font-medium">Tipo de certificación:</span>
        {{ profile.certification }}
      </div>
      <div class="text-sm">
        <span class="font-medium">Años de experiencia:</span>
        <span class="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          {{ profile.experience }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ profile: Object })
</script>

<style scoped>
.profile-card {
  /* ancho fijo para todas */
  flex: 0 0 320px;
}
</style>
