<script setup>
import { Avatar, Button, Drawer } from 'primevue'
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Sidebar from './Sidebar.vue'

const visible = ref(false)
const route = useRoute()

const pageTitle = computed(() => {
  switch (route.name) {
    case 'home':
      return 'Inicio'
    case 'buscarTecnicos':
      return 'Buscar Técnicos'
    case 'offers':
    case 'offers-list':
    case 'offer':
    case 'new-offer':
    case 'offer-detail':
      return 'Ofertas'
    case 'compararPerfiles':
      return 'Comparar Perfiles'
    case 'configuracion':
      return 'Configuración'
    default:
      return 'Bienvenido'
  }
})
</script>

<template>
  <header class="flex w-full justify-between items-center bg-white shadow-md p-4">
    <div class="flex items-center gap-3">
      <Drawer class="!bg-[#0066FF] max-w-1/2" v-model:visible="visible">
        <template #container="{ closeCallback }">
          <Sidebar :isMobile="true" />
        </template>
      </Drawer>
      <Button class="md:!hidden" icon="pi pi-bars" @click="visible = true" />
      <div class="">
        <img src="../../assets/logo.png" alt="logo" class="size-12 rounded-full" />
      </div>
      <h1 class="text-xl !font-semibold">{{ pageTitle }}</h1>
    </div>
  </header>
</template>
