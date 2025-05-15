<script setup>
import SearchersChart from '@/app/shared/components/SearchersChart.vue';
import ProfileStatus from '@/app/shared/components/ProfileStatus.vue';
import Suggested from '@/app/shared/components/Suggested.vue';
import MeterContacts from '@/app/shared/components/MeterContacts.vue';
import PieChart from '@/app/shared/components/PieChart.vue';
import Panel from 'primevue/panel';

const last_week = [65, 59, 80, 81, 56, 55, 40];
</script>

<template>
  <div class="dashboard-container">
    <section class="panel-section">
      <h2 class="title">Mi actividad</h2>
      <div class="panels-container">
        <Panel class="panel-card" header="Estado de tu perfil">
          <ProfileStatus :total="55" />
        </Panel>
        <Panel class="panel-card" header="Ofertas sugeridas">
          <Suggested :total="540" :suggested="{ label: 'Ofertas cercas de ti', value: 300 }"
            :suggested_2="{ label: 'Ofertas solicitando un ELECTRICISTA', value: 240 }" />
        </Panel>
        <Panel class="panel-card" header="Ofertas encontradas para ti">
          <SearchersChart :data="last_week" />
        </Panel>
      </div>
    </section>
    <section class="panel-section">
      <h2 class="title">Interacciones recientes</h2>
      <div class="panels-container">
        <Panel class="panel-card" header="Clientes contactados">
          <MeterContacts
            :value_1="{ label: 'Clientes que respondieron', value: 300 }"
            :value_2="{ label: 'Clientes que no respondieron', value: 200 }" />
        </Panel>
        <Panel class="panel-card" header="Ofertas guardadas">
          <Suggested
            :total="21" :suggested="{ label: 'Disponibles', value: 15 }"
            :suggested_2="{ label: 'Expiradas', value: 6 }" />
        </Panel>
        <Panel class="panel-card" header="Opiniones recibidias y Pendientes por responder">
          <PieChart :value_1="{ label: 'Opiniones recibidas', value: 100 }"
            :value_2="{ label: 'Pendientes por responder', value: 200 }" />
        </Panel>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('@/app/shared/styles/dashboard.css');
</style>
