<template>
  <div class="layout flex h-screen">
    <Sidebar />
    <div class="main-content flex-1 flex flex-col overflow-auto">
      <!-- Header con título y acciones -->
      <HeaderBar title="Mi Perfil">
        <template #actions>
          <Button icon="pi pi-envelope" class="p-button-text" />
          <Button icon="pi pi-bell" class="p-button-text" />
        </template>
      </HeaderBar>

      <!-- Pestañas Datos / Acerca de mí -->
      <TabView class="p-mt-4">
        <TabPanel header="Datos">
          <DatosTab :fields="fields" />
        </TabPanel>
        <TabPanel header="Acerca de mí">
          <AcercaDeMiTab
            :about="about"
            @update:about="updated => (about = updated)"
            @publish="updated => (about = updated)"
          />
        </TabPanel>
      </TabView>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import HeaderBar    from '../components/public/HeaderBar.vue'
import DatosTab     from '../components/DatosTab.vue'
import AcercaDeMiTab from '../components/AcercaDeMiTab.vue'

// PrimeVue components (registrados globalmente en main.js)
import Button   from 'primevue/button'
import TabView  from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'

// Datos iniciales
const fields = ref([
  { label: 'Nombres',               icon: 'pi pi-user',              value: 'Jane' },
  { label: 'Apellidos',             icon: 'pi pi-user',              value: 'Cooper' },
  { label: 'Tipo de Documento',     icon: 'pi pi-id-card',           value: 'DNI' },
  { label: 'Número de Documento',   icon: 'pi pi-hashtag',           value: '77894567' },
  { label: 'Fecha de Nacimiento',    icon: 'pi pi-calendar',          value: '15-08-1997' },
  { label: 'Sexo',                  icon: 'pi pi-venus-mars',        value: 'Femenino' },
  { label: 'Celular',               icon: 'pi pi-phone',             value: '987568741' },
  { label: 'País',                  icon: 'pi pi-globe',             value: 'Perú' },
  { label: 'Ciudad',                icon: 'pi pi-map-marker',        value: 'Lima' },
  { label: 'Dirección',             icon: 'pi pi-map-marker',        value: 'Av. Primavera 567, Dpto F-104' },
  { label: 'Correo electrónico',    icon: 'pi pi-envelope',          value: 'janecooper@gmail.com' },
  { label: 'Fecha de Registro',     icon: 'pi pi-calendar-times',    value: '17-04-22' }
])

const about = ref({
  me: '',
  experiences: '',
  skills: '',
  education: '',
  languages: '',
  notify: false,
  consent: false
})
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
