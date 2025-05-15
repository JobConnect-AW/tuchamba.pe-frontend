<template>
  <header class="header-bar">
    <div class="header-content">

      <img src="../../../../assets/image%203.png" class="logo" alt="Logo" />
      <h1>Configuracion</h1>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.header-bar {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  padding: 12px 24px;
}
.header-content {
  display: flex;
  align-items: center;
}
.logo {
  width: 40px; height: 40px;
  margin-right: 16px;
}
.header-content h1 {
  margin: 0;
  font-size: 1.5rem;
}
</style>
