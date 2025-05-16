<template>
  <nav :class="{
    'hidden md:flex bg-[#0066FF] w-[12.5%]': !props.isMobile,
    'flex w-full': props.isMobile,
  }" class="sticky top-0 left-0 bottom-0 p-4 flex-col gap-3">
    <div class="flex flex-col items-center">
      <img :src="userImg" alt="User Avatar" class="user-avatar" />
      <h2 class="user-name text-white !text-base">James Cooper</h2>
      <RouterLink
        :to="{ name: 'configuracion' }"
        class="user-role !text-gray-100 !text-xs hover:!bg-transparent"
      >
        Personalizar Perfil</RouterLink
      >
    </div>

    <ul class="flex flex-1 flex-col justify-center 2xl:justify-start gap-2">
      <li v-for="item in navItems" :key="item.name">
        <RouterLink
          :to="{ name: item.name }"
          activeClass="bg-[#1c4790]"
          class="flex flex-col gap-2 items-center justify-center !text-white cursor-pointer hover:!bg-[#1c4790] rounded-lg !py-2 transition-all duration-200"
        >
          <i :class="item.icon" class="!text-base"></i>
          <span class="text-center text-xs">{{ item.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink, useRouter } from 'vue-router'
import userAvatar from '../../assets/User1.png'
import { defineProps } from 'vue'

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})

const router = useRouter()
const userImg = userAvatar

const navItems = [
  { name: 'home', route: 'home', icon: 'pi pi-home', label: 'Inicio' },
  {
    name: 'buscarTecnicos',
    route: 'buscarTecnicos',
    icon: 'pi pi-search',
    label: 'Buscar Técnicos',
  },
  { name: 'offers-list', route: 'offers', icon: 'pi pi-file-check', label: 'Ofertas' },
  {
    name: 'compararPerfiles',
    route: 'compararPerfiles',
    icon: 'pi pi-users',
    label: 'Comparar Perfiles',
  },
  { name: 'configuracion', route: 'configuracion', icon: 'pi pi-cog', label: 'Configuración' },
]
</script>
