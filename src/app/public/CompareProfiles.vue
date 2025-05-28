<template>
  <div class="compare-profiles h-full flex flex-col bg-gray-100">


    <!-- Filtros + PDF -->
    <div class="filters-wrapper mx-8 my-4 flex items-center bg-white rounded shadow px-6 py-4">
      <FilterBar class="flex-1" />
      <button class="btn-pdf-inline ml-4">
        Guardar como PDF
      </button>
    </div>

    <!-- Contenedor FLEX para las tarjetas -->
    <div class="profiles-container flex flex-wrap justify-center gap-8 mx-8 mb-8 overflow-auto">
      <ProfileCard
        v-for="p in profiles"
        :key="p.id"
        :profile="p"
        class="profile-card"
      />
    </div>
  </div>
</template>

<script setup>

import FilterBar   from '@/app/shared/components/FilterBar.vue'
import ProfileCard from '@/app/shared/components/ProfileCard.vue'
import { reactive } from 'vue'

import juanImg    from '@/app/public/images/juan.jpg'
import teodoroImg from '@/app/public/images/teodoro.jpg'
import graciaImg  from '@/app/public/images/gracia.jpg'

const profiles = reactive([
  { id:1, name:'Juan González',    role:'Electricista', availability:['11:00 am','2:00 pm'], rating:4.7, reviews:200, certification:'Técnico certificado',    experience:14, image:juanImg },
  { id:2, name:'Teodoro Casanova', role:'Electricista', availability:['11:00 am','2:00 pm'], rating:4.7, reviews:200, certification:'Formación autodidacta',experience:12, image:teodoroImg },
  { id:3, name:'Gracia Espinoza',  role:'Electricista', availability:['11:00 am','2:00 pm'], rating:4.7, reviews:200, certification:'Institución técnica',    experience:13, image:graciaImg }
])
</script>

<style scoped>
.filters-wrapper {
  display: flex;
  align-items: center;
}

.btn-pdf-inline {
  background: #ff8800;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

/* Nuevo: contenedor flex que envuelve las tarjetas */
.profiles-container {
  display: flex;
  flex-wrap: nowrap;       /* evita salto de línea */
  overflow-x: auto;        /* permite scrollear si no caben */
  gap: 24px;               /* espacio entre tarjetas */
  justify-content: flex-start;
}

/* Si prefieres que siempre quepan sin scroll:
   usa flex-wrap: wrap; y quita overflow-x. */

.profile-card {
  flex: 0 0 360px;         /* ancho fijo de 360px */
}
</style>
