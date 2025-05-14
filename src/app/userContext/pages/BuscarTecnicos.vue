<template>
  <div class="buscar-tecnicos">
    <h2>Buscar Técnicos</h2>

    <div class="filters-cards-container">
      <!-- Filtros de búsqueda a la izquierda -->
      <div class="filters">
        <FiltrosBusqueda />
      </div>

      <!-- Cards de técnicos a la derecha -->
      <div class="cards">
        <TecnicosCard />
      </div>
    </div>
  </div>
</template>

<script>
import FiltrosBusqueda from "../components/FiltrosBusqueda.vue";
import TecnicosCard from "../components/TecnicosCard.vue";

export default {
  components: {
    FiltrosBusqueda,
    TecnicosCard,
  },
};
</script>

<style scoped>
.buscar-tecnicos {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.filters-cards-container {
  display: flex;
  justify-content: space-between; /* Divide el espacio entre filtro y cards */
  width: 100%;
  max-width: 1200px; /* Limitar el ancho máximo */
}

.filters {
  flex: 1;
  max-width: 300px; /* Filtro más estrecho */
  margin-right: 20px; /* Espacio entre el filtro y las cards */
}

.cards {
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
