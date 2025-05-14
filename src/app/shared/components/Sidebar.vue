<template>
  <aside class="sidebar">
    <div class="profile">
      <img :src="userImg" alt="Usuario" class="profile-img" />
      <div class="name">James Cooper</div>
      <button class="btn-profile">Personalizar Perfil</button>
    </div>
    <nav>
      <ul>
        <li v-for="item in navItems" :key="item.text">
          <router-link
            :to="item.to"
            class="nav-link"
            active-class="active"
          >
            <div class="icon">{{ item.icon }}</div>
            <div class="label">{{ item.text }}</div>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
import userImg from '@/assets/user.png'

const navItems = [
  { to: '/',         text: 'Inicio',           icon: '🏠' },
  { to: '/buscar',   text: 'Buscar técnicos',  icon: '🔍' },
  { to: '/ofertas',  text: 'Ofertas',          icon: '📄' },
  { to: '/comparar', text: 'Comparar Perfiles',icon: '👥' },
  { to: '/config',   text: 'Configuración',    icon: '⚙️' }
]
</script>

<style scoped>
.sidebar {
  width: 240px;
  background: #0066cc;
  color: white;
  padding: 24px 0;
}
.profile {
  text-align: center;
  margin-bottom: 40px;
}
.profile-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 12px;
  border: 2px solid white;
  object-fit: cover;
}
.name {
  font-weight: bold;
  margin-bottom: 8px;
}
.btn-profile {
  background: #004a99;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 0.85rem;
}
nav ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 20px;
}
.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;
  padding: 12px 0;
  transition: background 0.2s;
}
.nav-link .icon {
  font-size: 1.5rem;
  margin-bottom: 4px;
}
.nav-link .label {
  font-size: 0.9rem;
}
.nav-link:hover {
  background: rgba(255,255,255,0.2);
}
/* sección activa en azul más oscuro */
.nav-link.active {
  background: #004a99;
}
</style>
