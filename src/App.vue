<template>
  <div class="app-layout flex h-screen">
    <Sidebar />
    <div class="main-content flex-1 flex flex-col overflow-auto">
      <HeaderBar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/app/shared/Sidebar.vue'
import HeaderBar from '@/app/shared/HeaderBar.vue'
</script>
