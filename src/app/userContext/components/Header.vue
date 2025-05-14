<template>
  <div class="header">
    <!-- Logo e título -->
    <div class="header-left">
      <div class="logo">
        <img src="../../assets/logo.png" alt="logo" class="user-avatar">
      </div>
      <h1>{{ pageTitle }}</h1>
    </div>

    <div class="header-right">
      <i class="pi pi-envelope" title="Mensajes"></i>
      <i class="pi pi-bell" title="Notificaciones"></i>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    const pageTitle = computed(() => {
      switch (route.name) {
        case 'home':
          return 'Inicio';
        case 'buscarTecnicos':
          return 'Buscar Técnicos';
        case 'ofertas':
          return 'Ofertas';
        case 'compararPerfiles':
          return 'Comparar Perfiles';
        case 'configuracion':
          return 'Configuración';
        default:
          return 'Bienvenido';
      }
    });

    return { pageTitle };
  }
});
</script>

<style scoped>
.header {
  padding: 10px 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between; /* Asegura que los elementos estén distribuidos */
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para darle profundidad */
  margin-left: 25px;
  border-radius: 20px;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-left .logo {
  padding-top: 5px;
  color: var(--primary-color); /* Usamos el color principal */
  margin-right: 10px;
}

.header-left h1 {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.header-right {
  display: flex;
  gap: 20px; /* Espacio entre los íconos */
}

.header-right i {
  font-size: 24px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease;
}

.header-right i:hover {
  color: var(--primary-color); /* Cambio de color en hover */
}
.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 5px;
}

</style>
