<template>
  <div class="h-full flex flex-col">

    <!-- Header exclusivo de esta página -->
    <HeaderBarBuscar />

    <!-- Zona de filtros + cards -->
    <section class="flex-1 overflow-auto p-6">
      <div class="filters-cards-container">
        <div class="filters"><FiltrosBusqueda /></div>
        <div class="cards"><TecnicosCard /></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeaderBarBuscar from '@/app/userContext/components/HeaderBarBuscar.vue'
import FiltrosBusqueda  from '@/app/userContext/components/FiltrosBusqueda.vue'
import TecnicosCard     from '@/app/userContext/components/TecnicosCard.vue'
</script>

<style scoped>
.filters-cards-container{
  display:flex; justify-content:space-between;
  max-width:1200px; margin-inline:auto;
}
.filters{flex:1; max-width:300px; margin-right:20px;}
.cards{flex:3; display:flex; flex-wrap:wrap; gap:20px; justify-content:center;}
@media (max-width:768px){
  .filters-cards-container{flex-direction:column;align-items:center}
  .filters{margin:0 0 20px; max-width:100%}
}
</style>
