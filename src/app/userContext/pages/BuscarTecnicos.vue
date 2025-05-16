<!-- src/app/userContext/pages/BuscarTecnicos.vue -->
<template>
  <div class="h-full flex flex-col bg-gray-100">

    <!-- Filtros + cards -->
    <div class="flex-1 flex overflow-hidden px-6 pb-6">
      <!-- Filtros -->
      <aside class="w-[360px] shrink-0 mr-6">
        <FiltrosBusqueda />
      </aside>

      <!-- Cards -->
      <section class="flex-1 overflow-y-auto">
        <!-- El propio componente dibuja su grid interna -->
        <TechniciansCard />
      </section>
    </div>
  </div>
</template>

<script setup>
import HeaderBarBuscar   from '@/app/userContext/components/HeaderBarBuscar.vue'
import FiltrosBusqueda   from '@/app/userContext/components/FiltrosBusqueda.vue'
import TechniciansCard   from '@/app/userContext/components/TechniciansCard.vue'   // <- sin .vue.vue
</script>

<style scoped>
/* opcional: estilos del aside y media-query */
aside{/* … */}
@media (max-width:768px){aside{width:100%;margin:0 0 20px}}
</style>

