<template>
  <div class="filter-bar">
    <label>
      <input type="checkbox" v-model="onlyFavorites" />
      Solo Favoritos
    </label>

    <select v-model="category">
      <option value="">Categoría de servicio</option>
      <option>Electricista</option>
      <option>Estilista</option>
      <option>Carpintero</option>
      <option>Gasfitero</option>
      <option>Pintor de obras</option>
      <option>Albañil</option>
      <option>Soldador</option>
      <option>Jardinero</option>
    </select>

    <select v-model="availability">
      <option value="">Disponibilidad</option>
      <option>8:00 am - 12:00 pm</option>
      <option>10:00 am - 1:00 pm</option>
      <option>12:00 pm - 4:00 pm</option>
      <option>2:00 pm - 6:00 pm</option>
    </select>

    <select v-model="rating">
      <option value="">Valoración mínima</option>
      <option>3+</option>
      <option>4+</option>
      <option>5</option>
    </select>

    <select v-model="certification">
      <option value="">Tipo de certificación</option>
      <option>Técnico certificado</option>
      <option>Institución técnica</option>
      <option>Formación autodidacta</option>
      <option>Certificación en línea</option>
      <option>Licencia profesional</option>
    </select>

    <select v-model="experience">
      <option value="">Años de experiencia</option>
      <option>1-5</option>
      <option>6-10</option>
      <option>10+</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const onlyFavorites = ref(false)
const category      = ref('')
const availability  = ref('')
const rating        = ref('')
const certification = ref('')
const experience    = ref('')
</script>

<style scoped>
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  padding: 0 24px;
}
.filter-bar label {
  font-size: 0.9rem;
}
.filter-bar select {
  padding: 6px 8px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
