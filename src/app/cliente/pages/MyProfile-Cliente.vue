<template>
  <div class="layout flex h-screen">
    <Sidebar />

    <div class="main-content flex-1 flex flex-col overflow-auto">
      <!-- Header con título y acciones -->
      <HeaderBarPerfilCliente title="Mi Perfil">
        <template #actions>
          <Button icon="pi pi-envelope" class="p-button-text" />
          <Button icon="pi pi-bell"   class="p-button-text" />
        </template>
      </HeaderBarPerfilCliente>

      <!-- Pestañas Datos / Preferencias -->
      <TabView class="p-mt-4">
        <TabPanel header="Datos">
          <DatosTab :fields="fields" />
        </TabPanel>
        <TabPanel header="Preferencias">
          <PreferenciasTab />
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// público

// reutilizamos el HeaderBar genérico de “trabajador”
import HeaderBarPerfilCliente   from '@/app/cliente/components/public/HeaderBarPerfilCliente.vue'

// componentes locales
import DatosTab        from '@/app/cliente/components/DatosTab.vue'
import PreferenciasTab from '@/app/cliente/components/PreferenciasTab.vue'

// PrimeVue
import Button   from 'primevue/button'
import TabView  from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

// datos iniciales (idénticos a los de trabajador)
const fields = ref([
  { label:'Nombres',             icon:'pi pi-user',           value:'James' },
  { label:'Apellidos',           icon:'pi pi-user',           value:'Cooper' },
  { label:'Tipo de Documento',   icon:'pi pi-id-card',        value:'DNI' },
  { label:'Número de Documento', icon:'pi pi-hashtag',        value:'77894567' },
  { label:'Fecha de Nacimiento', icon:'pi pi-calendar',       value:'15-08-1997' },
  { label:'Sexo',                icon:'pi pi-venus-mars',     value:'Masculino' },
  { label:'Celular',             icon:'pi pi-phone',          value:'987568741' },
  { label:'País',                icon:'pi pi-globe',          value:'Perú' },
  { label:'Ciudad',              icon:'pi pi-map-marker',     value:'Lima' },
  { label:'Dirección',           icon:'pi pi-map-marker',     value:'Av. Primavera 567, Dpto F-104' },
  { label:'Correo electrónico',  icon:'pi pi-envelope',       value:'jane cooper@gmail.com' },
  { label:'Fecha de Registro',   icon:'pi pi-calendar-times', value:'17-04-22' }
])
</script>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
}
.main-content {
  flex: 1;
  background: #F8F9FA;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}
</style>
