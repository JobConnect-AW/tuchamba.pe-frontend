<!-- src/app/userContext/pages/BuscarTecnicos.vue -->
<template>
  <!-- Layout vertical pantalla completa -->
  <div class="h-full flex flex-col bg-gray-100">

    <!-- Header exclusivo de esta página -->
    <HeaderBarBuscar />

    <!-- Cuerpo: filtros + cards -->
    <div class="flex-1 flex overflow-hidden px-6 pb-6">
      <!-- ▸ Columna filtros (ancho fijo, sin overflow interno) -->
      <aside class="w-[360px] shrink-0 mr-6">
        <FiltrosBusqueda />
      </aside>

      <!-- ▸ Columna cards (toma el resto y hace scroll) -->
      <section class="flex-1 overflow-y-auto">
        <div
          class="grid gap-6
                 xl:grid-cols-3
                 lg:grid-cols-2
                 sm:grid-cols-1"
        >
          <TecnicosCard />
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import HeaderBarBuscar  from '@/app/userContext/components/HeaderBarBuscar.vue'
import FiltrosBusqueda  from '@/app/userContext/components/FiltrosBusqueda.vue'
import TecnicosCard     from '@/app/userContext/components/TecnicosCard.vue'
</script>

<style scoped>
/*   opcional: apariencia del panel de filtros   */
aside {
  /* si quieres fondo y sombra descomenta: */
  /* background-color:#fff; border-radius:12px; padding:16px; box-shadow:0 4px 10px rgba(0,0,0,.1); */
}

/* responsivo: apilar columnas en móvil */
@media (max-width: 768px) {
  .flex-1.flex {
    flex-direction: column;
  }
  aside {
    width: 100%;
    margin: 0 0 20px;
  }
}
</style>
