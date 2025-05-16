<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { RouterLink } from 'vue-router';

const email = ref('');
const password = ref('');

const login = () => {
  console.log('Email:', email.value);
  console.log('Password:', password.value);
  // Aquí puedes hacer la lógica de login con tu API
};
</script>

<template>
  <div class="login-form">
    <div class="logo flex items-center justify-center">
      <img src="/public/favicon.svg" alt="JobConnect" class="logo-img size-10" />
      <h1 class="!font-bold">JobConnect</h1>
    </div>
    <h2 class="text-center !font-semibold !mt-2 text-xl !mb-2">Recuperar Contraseña</h2>

    <div class="form-group max-w-[85%] !mx-auto">
      <label for="email" class="!text-sm">Dirección de e-mail</label>
      <InputText id="email" v-model="email" type="email" class="w-full" />
    </div>

    <Button severity="warn"  label="Enviar Código" class="w-full" @click="login" />

    <div class="links">
      <RouterLink to="login" class="link">Volver a la vista anterior</RouterLink>
  </div>

  </div>
</template>

<style scoped>

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.login-form {
  background-color: white;
  max-width: 350px;
  margin: auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem !important;
}

.link {
  color: #2f80ed;
  text-decoration: none;
  font-size: 0.9rem;
  background-color: transparent !important;
}

.link:hover {
  text-decoration: underline;
}

.links {
  margin-top: 1rem;
  text-align: center;
}
</style>
