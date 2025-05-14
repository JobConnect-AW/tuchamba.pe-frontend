<template>
  <div class="sidebar">
    <!-- Información del usuario -->
    <div class="user-info">
      <img
        src="https://www.gravatar.com/avatar/00000000000000000000000000000000"
        alt="User Avatar"
        class="user-avatar"
      />
      <p class="user-name">James Cooper</p>
      <p class="user-role">Personalizar Perfil</p>
    </div>


    <ul>
      <li @click="goToRoute('home')">
        <i class="pi pi-home"></i> Inicio
      </li>
      <li @click="goToRoute('buscarTecnicos')">
        <i class="pi pi-search"></i> Buscar Técnicos
      </li>
      <li @click="goToRoute('ofertas')">
        <i class="pi pi-file-check"></i> Ofertas
      </li>
      <li @click="goToRoute('compararPerfiles')">
        <i class="pi pi-users"></i> Comparar Perfiles
      </li>
      <li @click="goToRoute('configuracion')">
        <i class="pi pi-cog"></i> Configuración
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
.sidebar {
  background-color: var(--primary-color); /* Fondo del sidebar */
  color: var(--white-color);  /* Color del texto */
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
  font-size: 16px;
  font-weight: bold;
}

.user-role {
  font-size: 12px;
  color: #ccc;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.sidebar li {
  padding: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--white-color);
  transition: background-color 0.3s ease;
}

.sidebar li:hover {
  background-color: var(--sidebar-hover-color); /* Hover en el sidebar */
}

.sidebar i {
  margin-right: 10px;
}

.sidebar a {
  color: var(--white-color);
  text-decoration: none;
  font-weight: bold;
}
</style>
