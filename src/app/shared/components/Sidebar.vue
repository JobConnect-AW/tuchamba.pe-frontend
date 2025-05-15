<template>
  <div class="sidebar">
    <div class="user-info">
      <img :src="userImg" alt="User Avatar" class="user-avatar" />
      <p class="user-name">James Cooper</p>
      <p class="user-role">Personalizar Perfil</p>
    </div>

    <ul>
      <li
        v-for="item in navItems"
        :key="item.name"
        :class="item.name"
        @click="goToRoute(item.route)"
      >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import userAvatar from '../../assets/User1.png'

const router = useRouter()
const userImg = userAvatar

const navItems = [
  { name: 'home',            route: 'home',            icon: 'pi pi-home',        label: 'Inicio'           },
  { name: 'buscarTecnicos',  route: 'buscarTecnicos',  icon: 'pi pi-search',      label: 'Buscar Técnicos'  },
  { name: 'ofertas',         route: 'ofertas',         icon: 'pi pi-file-check',  label: 'Ofertas'          },
  { name: 'compararPerfiles',route: 'compararPerfiles',icon: 'pi pi-users',       label: 'Comparar Perfiles'},
  { name: 'configuracion',   route: 'configuracion',   icon: 'pi pi-cog',         label: 'Configuración'    }
]

const goToRoute = (routeName) => {
  router.push({ name: routeName })
}
</script>

<style scoped>
.sidebar {
  /* Colores */
  --primary-color:       #0066FF;
  --white-color:         #FFFFFF;
  --hover-color:         #FF9900;
  --sidebar-hover-color: #1C4790;

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
  font-size: 18px;
  font-weight: bold;
}

.user-role {
  font-size: 14px;
  color: #ccc;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.sidebar li {
  padding: 20px 15px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white-color);
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.sidebar li:hover {
  background-color: var(--sidebar-hover-color);
  border-radius: 5px;
}

.sidebar i {
  font-size: 24px;
  margin-bottom: 5px;
}

/* Ajustes específicos para 'Inicio' y 'Ofertas' */
.sidebar li.inicio,
.sidebar li.ofertas {
  align-items: center;
  padding-left: 0;
}
</style>
