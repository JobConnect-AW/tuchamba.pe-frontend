<template>
  <div class="buscar-tecnicos">
    <h2>Buscar Técnicos</h2>

    <FiltrosBusqueda />

  </div>
</template>

<script>
// Importamos el componente de filtros de búsqueda
import FiltrosBusqueda from '../components/FiltrosBusqueda.vue';

export default {
  components: {
    FiltrosBusqueda,  // Registramos el componente aquí
  },
  data() {
    return {
      técnicos: [
        { id: 1, nombre: 'Juan González', calificacion: 4.7, numCalificaciones: 200, imagen: 'imagen1.jpg' },
        { id: 2, nombre: 'Teodoro Casanova', calificacion: 4.3, numCalificaciones: 100, imagen: 'imagen2.jpg' },
        { id: 3, nombre: 'Gracia Espinoza', calificacion: 4.1, numCalificaciones: 50, imagen: 'imagen3.jpg' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
