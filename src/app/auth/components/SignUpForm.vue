<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { RouterLink, useRouter } from 'vue-router';
import { SignUpUseCase } from '../application/use-cases/sign-up.usecase';
import { ApiAuthRepository } from '../infrastructure/repositories/api-auth.repository';
import { HttpService } from '@/app/shared/infrastructure/services/http.service';
import { RegistrationService } from '../infrastructure/services/registration.service';
import { SignUpDTO } from '../application/dtos/sign-up.dto';

const router = useRouter();
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

const apiAuthRepository = new ApiAuthRepository(new HttpService());
const signUpUseCase = new SignUpUseCase(apiAuthRepository);

const signUp = async () => {
  try {
    isLoading.value = true;
    errorMessage.value = '';

    if (!email.value || !password.value) {
      throw new Error('El email y la contraseña son obligatorios');
    }

    const signUpData = new SignUpDTO(email.value, password.value);
    const result = await signUpUseCase.executeSignUp(signUpData);

    RegistrationService.saveRegistrationData(result);

    router.push('/profile-setup');
  } catch (error) {
    errorMessage.value = error.message || 'Error al crear la cuenta';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="login-form">
     <h2 class="text-2xl !font-bold !mb-5">Registrarse</h2>

    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <div class="form-group">
      <label for="email">Dirección de e-mail</label>
      <InputText id="email" v-model="email" type="email" class="w-full" :disabled="isLoading" />
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <Password id="password" v-model="password" class="w-full" toggleMask :disabled="isLoading" />
    </div>

    <Button
      :label="isLoading ? 'Creando cuenta...' : 'Crear Cuenta'"
      severity="warn"
      class="w-full mt-3"
      @click="signUp"
      :disabled="isLoading"
    />

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

.error-message {
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}
</style>
