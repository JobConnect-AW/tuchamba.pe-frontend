import { createRouter, createWebHistory } from 'vue-router'
import Login from '../app/auth/pages/Login.vue'
import SignUp from "@/app/auth/pages/SignUp.vue";
import PasswordRecovery from "@/app/auth/pages/PasswordRecovery.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login', component: Login,
    },
    {
      path: '/sign-up', component: SignUp,
    },
    {
      path: '/password-recovery', component: PasswordRecovery,
    }
  ],
})

export default router
