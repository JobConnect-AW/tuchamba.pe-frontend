<template>
  <div class="compare-view flex flex-col h-full">

    <!-- 1) Header -->
    <HeaderBarCompare />

    <!-- 2) Filtros + PDF: UNA sola línea -->
    <div
      class="filters-panel flex flex-nowrap items-center space-x-4 px-6 py-4 bg-white border-b overflow-x-auto"
    >
      <FavoritesCheckbox v-model="onlyFav" />
      <CategoryFilter      v-model="category" />
      <AvailabilityFilter  v-model="availability" />
      <RatingFilter        v-model="rating" />
      <CertificationFilter v-model="certification" />
      <ExperienceFilter    v-model="experience" />
      <PDFButton class="ml-auto" />
    </div>

    <!-- 3) Grilla de tarjetas: flex-wrap para que queden lado a lado -->
    <div class="profiles-container flex-1 overflow-auto px-6 py-4 bg-gray-100">
      <div class="cards-wrapper flex flex-wrap justify-center gap-6">
        <ProfileCard
          v-for="p in profiles"
          :key="p.id"
          :profile="p"
          class="profile-card"
        />
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

import HeaderBarCompare             from '@/app/public/components/HeaderBarCompare.vue'
import FavoritesCheckbox     from './components/FavoritesCheckbox.vue'
import CategoryFilter        from './components/CategoryFilter.vue'
import AvailabilityFilter    from './components/AvailabilityFilter.vue'
import RatingFilter          from './components/RatingFilter.vue'
import CertificationFilter   from './components/CertificationFilter.vue'
import ExperienceFilter      from './components/ExperienceFilter.vue'
import PDFButton             from './components/PDFButton.vue'
import ProfileCard           from './components/ProfileCard.vue'

import juanImg    from '@/assets/juan.jpg'
import teodoroImg from '@/assets/teodoro.jpg'
import graciaImg  from '@/assets/gracia.jpg'

const onlyFav      = ref(false)
const category     = ref(null)
const availability = ref(null)
const rating       = ref(null)
const certification= ref(null)
const experience   = ref(null)

const profiles = reactive([
  {
    id: 1,
    name: 'Juan González',
    role: 'Electricista',
    availability: ['11:00 am', '2:00 pm'],
    rating: 4.7,
    reviews: 200,
    certification: 'Técnico certificado',
    experience: '14 años',
    image: juanImg
  },
  {
    id: 2,
    name: 'Teodoro Casanova',
    role: 'Electricista',
    availability: ['11:00 am', '2:00 pm'],
    rating: 4.7,
    reviews: 200,
    certification: 'Formación autodidacta',
    experience: '12 años',
    image: teodoroImg
  },
  {
    id: 3,
    name: 'Gracia Espinoza',
    role: 'Electricista',
    availability: ['11:00 am', '2:00 pm'],
    rating: 4.7,
    reviews: 200,
    certification: 'Institución técnica',
    experience: '13 años',
    image: graciaImg
  }
])
</script>

<style scoped>
/* 2) Filtros en línea sin wrap */
.filters-panel {
  display: flex;
  gap: 1rem;;              /* espacio igual entre todos */
}

/* 3) Contenedor de tarjetas */
.cards-wrapper {
  /* flex-wrap mantiene las tarjetas lado a lado */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;             /* igual que gap-6 */
}

/* cada tarjeta ocupa ancho fijo */
.profile-card {
  flex: 0 0 360px;         /* ajusta a tu gusto (300–360px) */
}
</style>
