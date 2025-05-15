<template>
  <div class="app-layout flex h-screen">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-auto">

      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/app/shared/components/Sidebar.vue'
import HeaderBar from '@/app/shared/components/HeaderBar.vue'
</script>

<style global>
@import 'tailwindcss';
@import "tailwindcss-primeui";

</style>
