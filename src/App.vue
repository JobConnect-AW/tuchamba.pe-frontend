<template>
  <div class="app-layout flex h-screen">
    <Sidebar />
    <div class="main-content flex-1 flex flex-col overflow-auto">
      <HeaderBar title="" />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/app/shared/components/Sidebar.vue'
import HeaderBar from '@/app/shared/components/HeaderBar.vue'
</script>

<style>
@import 'tailwindcss';
</style>
