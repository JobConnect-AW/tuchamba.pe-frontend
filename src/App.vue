<template>
  <div class="app-layout flex h-screen">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-auto">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/app/public/components/Sidebar.vue'
import Header from '@/app/public/components/Header.vue'
</script>

<style global>
@import 'tailwindcss';
@import 'tailwindcss-primeui';
</style>
