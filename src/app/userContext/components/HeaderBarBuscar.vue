<template>
  <div class="header-buscar flex items-center justify-between bg-white
              shadow-md rounded-2xl px-4 py-2 mb-6">
    <!-- Izquierda -->
    <div class="flex items-center gap-3">
      <img src="@/app/assets/logo.png" alt="logo" class="w-8 h-8 rounded-full" />
      <h1 class="text-lg font-semibold font-600">Buscar Técnicos</h1>
    </div>

    <!-- Derecha (iconos) -->
    <div class="flex gap-5 text-gray-600 text-xl">
      <i class="pi pi-envelope cursor-pointer hover:text-primary " style="font-size: 1.5rem"></i>
      <i class="pi pi-bell    cursor-pointer hover:text-primary" style="font-size: 1.5rem"></i>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.header-buscar{
  margin-left: 15px;
}
h1{
  font-size: 1.3rem;
}
</style>
