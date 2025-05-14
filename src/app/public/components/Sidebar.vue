<template>
  <aside class="app-sidebar">
    <div class="profile">
      <img :src="userImg" class="profile-img" alt="Usuario" />
      <div class="name">James Cooper</div>
      <PButton label="Personalizar Perfil" class="p-button-sm p-button-outlined" />
    </div>

    <ul class="menu">
      <li v-for="i in items" :key="i.to">
        <router-link :to="i.to" class="menu-link" active-class="active">
          <i :class="`pi pi-${i.icon}`"></i>
          <span>{{ i.label }}</span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import userImg from '@/assets/user.png'

const items = [
  { to:'/',         label:'Inicio',            icon:'home' },
  { to:'/buscar',   label:'Buscar técnicos',   icon:'search' },
  { to:'/ofertas',  label:'Ofertas',           icon:'file' },
  { to:'/comparar', label:'Comparar Perfiles', icon:'users' },
  { to:'/config',   label:'Configuración',     icon:'cog' }
]
</script>

<style scoped>
.app-sidebar {
  width: 240px;
  background: #0066cc;
  color: #fff;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile {
  text-align: center;
  margin-bottom: 2rem;
}
.profile-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-bottom: .5rem;
  object-fit: cover;
}
.name {
  font-weight: bold;
  margin-bottom: .5rem;
}
.menu {
  list-style: none;
  padding: 0;
  width: 100%;
}
.menu-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .75rem 0;
  color: #fff;
  text-decoration: none;
  transition: background .2s;
}
.menu-link i {
  font-size: 1.5rem;
  margin-bottom: .25rem;
}
.menu-link.active,
.menu-link:hover {
  background: rgba(255,255,255,0.2);
  border-radius: 4px;
}
</style>
