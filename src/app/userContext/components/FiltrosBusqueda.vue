<template>
  <div class="filters-container">
    <div class="filters-header">
      <h2 class="filters-title">Filtros de Búsqueda</h2>
    </div>

    <!-- Barra de Búsqueda -->
    <div class="filter-item">
      <label for="search">Búsqueda</label>
      <InputGroup>
        <InputText
          id="search"
          v-model="searchText"
          placeholder="Buscar técnicos, servicios..."
        />
        <InputGroupAddon>
          <pv-button
            icon="pi pi-search"
            severity="secondary"
            variant="text"
            @click="applyFilters"
          />
        </InputGroupAddon>
      </InputGroup>
    </div>

    <!-- Filtro de Categoría de Servicio -->
    <div class="filter-item">
      <label for="category">Categoría del Servicio</label>
      <Select
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
      <Select
        v-model="selectedLocation"
        :options="locations"
        placeholder="Selecciona un distrito"
        optionLabel="label"
        optionValue="value"
      />
    </div>

    <!-- Filtro de Disponibilidad -->
    <div class="filter-item">
      <label for="availability">Disponibilidad</label>
      <Select
        v-model="selectedAvailability"
        :options="availabilityOptions"
        placeholder="Selecciona la disponibilidad"
        optionLabel="label"
        optionValue="value"
      />
    </div>

    <!-- Filtro de Valoración Mínima -->
    <div class="filter-item">
      <label for="rating">Valoración Mínima</label>
      <Select
        v-model="selectedRating"
        :options="ratingOptions"
        placeholder="Selecciona la valoración mínima"
        optionLabel="label"
        optionValue="value"
      />
    </div>

    <!-- Filtro de Años de Experiencia -->
    <div class="filter-item">
      <label for="experience">Años de Experiencia</label>
      <Select
        v-model="selectedExperience"
        :options="experienceOptions"
        placeholder="Selecciona los años de experiencia"
        optionLabel="label"
        optionValue="value"
      />
    </div>

    <!-- Filtro de Tipo de Certificación -->
    <div class="filter-item">
      <label for="certification">Tipo de Certificación</label>
      <Select
        v-model="selectedCertification"
        :options="certificationOptions"
        placeholder="Selecciona el tipo de certificación"
        optionLabel="label"
        optionValue="value"
      />
    </div>

    <!-- Botones de Aplicar y Borrar -->
    <div class="filter-actions">
      <pv-button label="Aplicar" icon="pi pi-check" @click="applyFilters" />
      <pv-button label="Borrar" icon="pi pi-times" @click="clearFilters" class="p-button-secondary" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import InputGroup from "primevue/inputgroup";
import InputText from "primevue/inputtext";
import Select from "primevue/select";
import Button from "primevue/button";

export default {
  components: {
    InputGroup,
    InputText,
    Select,
    Button,
  },
  setup() {
    // Datos para los filtros
    const searchText = ref("");
    const selectedCategory = ref(null);
    const selectedLocation = ref(null);
    const selectedAvailability = ref(null);
    const selectedRating = ref(null);
    const selectedExperience = ref(null);
    const selectedCertification = ref(null);

    // Opciones para los filtros
    const categories = [
      { label: "Electricista", value: "electricista" },
      { label: "Plomero", value: "plomero" },
      { label: "Carpintero", value: "carpintero" },
    ];

    const locations = [
      { label: "Lima", value: "lima" },
      { label: "Cusco", value: "cusco" },
      { label: "Arequipa", value: "arequipa" },
    ];

    const availabilityOptions = [
      { label: "Disponible", value: "disponible" },
      { label: "No disponible", value: "no_disponible" },
    ];

    const ratingOptions = [
      { label: "4 estrellas y más", value: "4+" },
      { label: "3 estrellas y más", value: "3+" },
      { label: "2 estrellas y más", value: "2+" },
    ];

    const experienceOptions = [
      { label: "10+ años", value: "10+" },
      { label: "6-10 años", value: "6-10" },
      { label: "3-5 años", value: "3-5" },
      { label: "0-2 años", value: "0-2" },
    ];

    const certificationOptions = [
      { label: "Certificación A", value: "cert_a" },
      { label: "Certificación B", value: "cert_b" },
      { label: "Certificación C", value: "cert_c" },
    ];

    // Funciones para manejar los filtros
    const applyFilters = () => {
      console.log("Aplicando filtros:");
      console.log({
        searchText: searchText.value,
        selectedCategory: selectedCategory.value,
        selectedLocation: selectedLocation.value,
        selectedAvailability: selectedAvailability.value,
        selectedRating: selectedRating.value,
        selectedExperience: selectedExperience.value,
        selectedCertification: selectedCertification.value,
      });
    };

    const clearFilters = () => {
      searchText.value = "";
      selectedCategory.value = null;
      selectedLocation.value = null;
      selectedAvailability.value = null;
      selectedRating.value = null;
      selectedExperience.value = null;
      selectedCertification.value = null;
    };

    return {
      searchText,
      selectedCategory,
      selectedLocation,
      selectedAvailability,
      selectedRating,
      selectedExperience,
      selectedCertification,
      categories,
      locations,
      availabilityOptions,
      ratingOptions,
      experienceOptions,
      certificationOptions,
      applyFilters,
      clearFilters,
    };
  },
};
</script>

<style scoped>
.filters-container {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin-left: 20px;
  margin-top: 15px;
}

.filters-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.filters-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-color);
}

.search-wrapper {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.search-wrapper .pi-search {
  color: var(--primary-color);
}

.filter-item {
  margin-bottom: 20px;
}

.filter-item label {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
}

.filter-actions {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
}

.filter-actions .p-button-secondary {
  background-color: #f1f1f1;
  border-color: #e0e0e0;
}

/* Ajustamos para que los Select tengan el mismo tamaño */
.p-select {
  width: 100% !important; /* Aseguramos que todos los Select tengan el mismo tamaño */
}

input,
select {
  width: 100%;
}

input[type="text"],
input[type="number"],
select {
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.p-tree-select {
  width: 100%;
}

.p-select {
  width: 100%;
}

/* Custom styles for PrimeVue components */
.p-inputgroup {
  width: 100%;
  background-color: #f4f7fa;
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 10px;
}

.p-inputgroup input {
  background-color: #fff;
  border: none;
  border-radius: 8px;
}

.p-inputgroup i {
  color: #555;
}
</style>
