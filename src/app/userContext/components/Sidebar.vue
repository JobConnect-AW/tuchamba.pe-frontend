<template>
  <div class="sidebar">
    <div class="user-info">
      <img
        src="../../assets/User1.png"
        alt="User Avatar"
        class="user-avatar"
      />
      <p class="user-name">James Cooper</p>
      <p class="user-role">Personalizar Perfil</p>
    </div>

    <ul>
      <li class="inicio" @click="goToRoute('home')">
        <i class="pi pi-home"></i>
        <span>Inicio</span>
      </li>
      <li @click="goToRoute('buscarTecnicos')">
        <i class="pi pi-search"></i>
        <span>Buscar Técnicos</span>
      </li>
      <li class="ofertas" @click="goToRoute('ofertas')">
        <i class="pi pi-file-check"></i>
        <span>Ofertas</span>
      </li>
      <li @click="goToRoute('compararPerfiles')">
        <i class="pi pi-users"></i>
        <span>Comparar Perfiles</span>
      </li>
      <li @click="goToRoute('configuracion')">
        <i class="pi pi-cog"></i>
        <span>Configuración</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();

    const goToRoute = (routeName) => {
      router.push({ name: routeName });
    };

    return { goToRoute };
  }
});
</script>

<style scoped>
/* Sidebar */
.sidebar {
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 250px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-info {
  text-align: center;
  margin-bottom: 30px;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.user-name {
  font-size: 18px; /* Aumentamos el tamaño de la fuente */
  font-weight: bold;
}

.user-role {
  font-size: 14px; /* Aumentamos un poco la fuente */
  color: #ccc;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.sidebar li {
  padding: 20px 15px;  /* Ajustamos el espaciado para mayor separación */
  cursor: pointer;
  display: flex;
  flex-direction: column;  /* Los elementos (íconos y texto) se apilan verticalmente */
  align-items: center;     /* Centrar el contenido horizontalmente */
  justify-content: center; /* Centrar el contenido verticalmente */
  color: var(--white-color);
  font-size: 16px; /* Ajustamos el tamaño de la fuente */
  font-weight: 500;  /* Aumentamos el peso de la fuente */
  transition: background-color 0.3s ease;
}

.sidebar li:hover {
  background-color: var(--sidebar-hover-color); /* Hover en el sidebar */
  border-radius: 5px; /* Añadimos bordes redondeados para un mejor efecto visual */
}

.sidebar i {
  font-size: 24px;  /* Aumentamos el tamaño de los íconos */
  margin-bottom: 5px; /* Menor espaciado entre el ícono y el texto */
}

.sidebar a {
  color: var(--white-color);
  text-decoration: none;
  font-weight: bold;

  /* Alineación específica para 'Inicio' y 'Ofertas' */
  .sidebar li.inicio, .sidebar li.ofertas {
    align-items: center;   /* Centrado horizontal */
    padding-left: 0; /* Sin padding extra para estos dos elementos */
  }}
</style>
