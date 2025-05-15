<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

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
    <div class="logo">
      <img src="/public/favicon.svg" alt="JobConnect" class="logo-img" />
      <h1>JobConnect</h1>
    </div>
    <h2>Recuperar Contraseña</h2>

    <div class="form-group">
      <label for="email">Dirección de e-mail</label>
      <InputText id="email" v-model="email" type="email" class="w-full" />
    </div>

    <Button label="Enviar Código" class="w-full mt-3" @click="login" />

    <div class="links">
      <a href="login" class="link">Volver a la vista anterior</a>
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
  max-width: 350px;
  margin: auto;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

.link {
  color: #2f80ed;
  text-decoration: none;
  font-size: 0.9rem;
}

.link:hover {
  text-decoration: underline;
}

.links {
  margin-top: 1rem;
  text-align: center;
}
</style>
