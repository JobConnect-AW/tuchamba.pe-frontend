<template>
  <div class="app-layout flex h-screen">
    <Sidebar />

    <div class="main-content flex-1 flex flex-col overflow-auto">
      <HeaderBar title=""/>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar   from '@/app/cliente/components/public/Sidebar.vue'

</script>
<style>
/* Estilos globales de layout */
.app-layout {
  display: flex;
  height: 100vh;
}
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
</style>
