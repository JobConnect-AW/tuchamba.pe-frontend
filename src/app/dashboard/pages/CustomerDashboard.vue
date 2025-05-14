<script setup>
import SearchersChart from '../components/SearchersChart.vue';
import ProfileStatus from '../components/ProfileStatus.vue';
import Suggested from '../components/Suggested.vue';
import MeterContacts from '../components/MeterContacts.vue';
import PieChart from '../components/PieChart.vue';
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
                <Panel class="panel-card" header="Técnicos sugeridos">
                    <Suggested :total="540"
                        :suggested="{ label: 'Técnicos nuevos esta semana', value: 300 }"
                        :suggested_2="{ label: 'Técnicos segun tus filtros recientes', value: 240 }" />
                </Panel>
                <Panel class="panel-card" header="Búsquedas realizadas por ti">
                    <SearchersChart :data="last_week" />
                </Panel>
            </div>
        </section>
        <section class="panel-section">
            <h2 class="title">Técnicos contactados</h2>
            <div class="panels-container">
                <Panel class="panel-card" header="Clientes contactados">
                    <MeterContacts :value_1="{ label: 'Técnicos que contratastes', value: 300 }"
                        :value_2="{ label: 'Técnicos que respondieron', value: 7 }" />
                </Panel>
                <Panel class="panel-card" header="Técnicos guardados">
                    <Suggested 
                        :total="21" :suggested="{ label: 'Favoritos', value: 15 }"
                        :suggested_2="{ label: 'Contactados', value: 6 }" />
                </Panel>
                <Panel class="panel-card" header="Recomendaciones y valoraciones">
                    <PieChart :value_1="{ label: 'Reseñas que dejastes', value: 100 }"
                        :value_2="{ label: 'Valoraciones por completar', value: 200 }" />
                </Panel>
            </div>
        </section>
    </div>
</template>

<style scoped>
@import url('../styles/dashboard.css');
</style>