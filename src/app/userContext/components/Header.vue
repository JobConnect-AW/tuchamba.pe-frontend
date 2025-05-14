<template>
  <div class="header">
    <h1>{{ pageTitle }}</h1>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';  // Usamos computed para calcular dinámicamente el título
import { useRoute } from 'vue-router';  // Usamos useRoute para obtener la ruta activa

export default defineComponent({
  setup() {
    const route = useRoute();  // Usamos useRoute para obtener la ruta activa

    // Calculamos el título según la ruta
    const pageTitle = computed(() => {
      switch (route.name) {
        case 'home':
          return 'Inicio';
        case 'buscarTecnicos':
          return 'Buscar Técnicos';
        case 'ofertas':
          return 'Ofertas';
        case 'compararPerfiles':
          return 'Comparar Perfiles';
        case 'configuracion':
          return 'Configuración';
        default:
          return 'Bienvenido';
      }
    });

    return { pageTitle };
  }
});
</script>

<style scoped>
.header {
  padding: 20px;
  background-color: #ecf0f1;
  margin-left: 250px;
}

.header h1 {
  margin: 0;
}
</style>
