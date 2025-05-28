<template>
  <div class="app-layout flex h-screen">
    <Sidebar v-if="!isPublic" />
    <div class="flex-1 flex flex-col overflow-auto">
      <Header v-if="!isPublic" />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/app/public/components/Sidebar.vue'
import Header from '@/app/public/components/Header.vue'
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const isPublic = computed(() => ['/login', '/sign-up', '/password-recovery'].includes(route.path));
</script>

<style global>
@import 'tailwindcss';
@import 'tailwindcss-primeui';
</style>
