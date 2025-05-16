<template>
  <div class="cards-grid">
    <!-- Una Card por técnico -->
    <Card
      v-for="t in technicians"
      :key="t.id"
      class="tech-card"
    >
      <!-- imagen -->
      <template #header>
        <img :src="t.photo" alt="foto técnico" class="photo" />
      </template>

      <!-- contenido -->
      <template #content>
        <h3 class="name">
          {{ t.firstName }} {{ t.lastName }}
        </h3>
        <p class="info"><b>Oficio:</b> {{ t.trade }}</p>
        <p class="info"><b>Experiencia:</b> {{ t.yearsExp }} años</p>
        <p class="info"><b>Calificación:</b> {{ t.rating }} ⭐</p>
      </template>

      <!-- botón -->
      <template #footer>
        <Button
          label="Ver perfil"
          icon="pi pi-user"
          class="p-button-primary w-full"
          @click="goProfile(t.id)"
        />
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Card   from 'primevue/card';
import Button from 'primevue/button';
import  {techniciansService}  from '../service/techniciansService.js';

const technicians = ref([]);
const router      = useRouter();

const fetchTechnicians = async () => {
  technicians.value = await techniciansService.getAll();
};

const goProfile = (id) => {
  // Ajusta la ruta de detalle si existe
  router.push({ name: 'perfilTecnico', params: { id } });
};

onMounted(fetchTechnicians);
</script>

<style scoped>
.cards-grid{
  display:flex;
  flex-wrap:wrap;
  gap:20px;
  justify-content:center;
}
.tech-card{
  width:250px;
}
.photo{
  width:100%;
  height:160px;
  object-fit:cover;
}
.name{
  font-size:18px;
  font-weight:600;
  margin-bottom:8px;
}
.info{
  font-size:14px;
  margin:2px 0;
}
</style>
