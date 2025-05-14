<template>
  <div class="filters">
    <h2>Filtros de Búsqueda</h2>

    <!-- Barra de Búsqueda -->
    <div class="filter-item">
      <label for="search">Búsqueda</label>
      <InputGroup>
        <template #prepend>
          <i class="pi pi-search"></i>
        </template>
        <input id="search" type="text" v-model="searchText" placeholder="Buscar..."/>
      </InputGroup>
    </div>

    <!-- Filtro de Categoría de Servicio -->
    <div class="filter-item">
      <label for="category">Categoría del Servicio</label>
      <TreeSelect
        v-model="selectedCategory"
        :options="categories"
        placeholder="Selecciona una categoría"
        optionLabel="label"
        optionValue="value"
      />
    </div>

    <!-- Filtro de Ubicación/Distrito -->
    <div class="filter-item">
      <label for="location">Ubicación / Distrito</label>
      <TreeSelect
        v-model="selectedLocation"
        :options="locations"
        placeholder="Selecciona un distrito"
        optionLabel="label"
        optionValue="value"
      />
    </div>

    <!-- Filtro de Años de Experiencia -->
    <div class="filter-item">
      <label for="experience">Años de Experiencia</label>
      <TreeSelect
        v-model="selectedExperience"
        :options="experienceOptions"
        placeholder="Selecciona los años de experiencia"
        optionLabel="label"
        optionValue="value"
      />
    </div>

    <!-- Botones de Aplicar y Borrar -->
    <div class="filter-actions">
      <Button label="Aplicar" icon="pi pi-check" @click="applyFilters" />
      <Button label="Borrar" icon="pi pi-times" @click="clearFilters" class="p-button-secondary" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { InputGroup } from 'primevue/inputgroup';
import TreeSelect from 'primevue/treeselect';
import Button from 'primevue/button';

export default {
  components: {
    InputGroup,
    TreeSelect,
    Button
  },
  setup() {
    // Datos para los filtros
    const searchText = ref('');
    const selectedCategory = ref(null);
    const selectedLocation = ref(null);
    const selectedExperience = ref(null);

    // Opciones para los filtros
    const categories = [
      { label: 'Electricista', value: 'electricista' },
      { label: 'Plomero', value: 'plomero' },
      { label: 'Carpintero', value: 'carpintero' }
    ];

    const locations = [
      { label: 'Lima', value: 'lima' },
      { label: 'Cusco', value: 'cusco' },
      { label: 'Arequipa', value: 'arequipa' }
    ];

    const experienceOptions = [
      { label: '10+ años', value: '10+' },
      { label: '6-10 años', value: '6-10' },
      { label: '3-5 años', value: '3-5' },
      { label: '0-2 años', value: '0-2' }
    ];

    // Funciones para manejar los filtros
    const applyFilters = () => {
      console.log('Aplicando filtros:');
      console.log({
        searchText: searchText.value,
        selectedCategory: selectedCategory.value,
        selectedLocation: selectedLocation.value,
        selectedExperience: selectedExperience.value
      });
    };

    const clearFilters = () => {
      searchText.value = '';
      selectedCategory.value = null;
      selectedLocation.value = null;
      selectedExperience.value = null;
    };

    return {
      searchText,
      selectedCategory,
      selectedLocation,
      selectedExperience,
      categories,
      locations,
      experienceOptions,
      applyFilters,
      clearFilters
    };
  }
};
</script>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-item {
  display: flex;
  flex-direction: column;
}

.filter-item label {
  margin-bottom: 8px;
  font-weight: bold;
}

.filter-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>
