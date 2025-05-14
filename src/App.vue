<template>
  <div id="app">
    <Sidebar />
    <div class="main-content">
      <Header />
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '../src/app/userContext/components/Sidebar.vue';
import Header from '../src/app/userContext/components/Header.vue';

export default {
  components: {
    Sidebar,
    Header
  }
}
</script>

<style>
.main-content {
  margin-left: 250px;  /* Asegura que el contenido principal no se superponga con el Sidebar */
}
</style>
