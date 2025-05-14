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
import Sidebar from '@/app/public/components/Sidebar.vue'
</script>

<style>
.app-layout {
  background: #f0f2f5;
}
</style>
