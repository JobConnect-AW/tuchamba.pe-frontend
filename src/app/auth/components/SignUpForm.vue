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
     <h2 class="text-2xl !font-bold !mb-5">Registrarse</h2>

    <div class="form-group">
      <label for="email">Dirección de e-mail</label>
      <InputText id="email" v-model="email" type="email" class="w-full" />
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <Password id="password" v-model="password" class="w-full" toggleMask />
    </div>

    <Button label="Iniciar Sesión" severity="warn" class="w-full mt-3" @click="login" />

    <div class="links">
      <RouterLink to="/password-recovery" class="link">¿Olvidaste tu contraseña?</RouterLink>
      <br />
      <span>Si ya tienes cuenta <RouterLink to="/login" class="link">Inicia Sesión</RouterLink></span>
    </div>

  </div>
</template>

<style scoped>

.login-form {
  max-width: 350px;
  margin: auto;
  padding: 2rem;
  border-radius: 10px;
}

.form-group {
  margin-bottom: 1rem;
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
