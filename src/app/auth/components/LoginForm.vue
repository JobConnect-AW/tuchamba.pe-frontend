<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import { RouterLink, useRouter } from 'vue-router';
import { LoginUseCase } from '../application/use-cases/login.usecase';
import { LoginDTO } from '../application/dtos/sign-up.dto';
import { ApiAuthRepository } from '../infrastructure/repositories/api-auth.repository';
import { HttpService } from '../../shared/infrastructure/services/http.service';
import { AuthService } from '@/app/shared/infrastructure/services/auth.service';

const router = useRouter();
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

const httpService = HttpService.getInstance();
const authRepository = new ApiAuthRepository(httpService);
const loginUseCase = new LoginUseCase(authRepository);
const authService = new AuthService();

const login = async () => {
  if (!email.value || !password.value) {
    errorMessage.value = 'Por favor, completa todos los campos';
    return;
  }

  isLoading.value = true;
  errorMessage.value = '';

  try {
    const loginData = new LoginDTO(email.value, password.value);
    const result = await loginUseCase.executeLogin(loginData);

    authService.saveAuthData(result.uid, result.email, result.token);

    const userData = authService.getUserData();
    const user = await authRepository.getUserByAccountUid(userData?.uid);

    if (result.role === "CUSTOMER") {
      if (user.customerId) {
        router.push('/dashboard/customer');
      } else {
        router.push('/customer-setup');
      }
    } else {
      if (user.workerId) {
        router.push('/dashboard/worker');
      } else {
        router.push('/worker-setup');
      }
    }
  } catch (error) {
    errorMessage.value = 'Error al iniciar sesión. Verifica tus credenciales.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="login-form">
    <h2 class="text-2xl !font-bold !mb-5">Iniciar Sesión</h2>

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

    <Button :label="isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'" severity="warn" class="w-full mt-3"
      @click="login" :loading="isLoading" :disabled="isLoading" />

    <div class="links">
      <a href="/password-recovery" class="link">¿Olvidaste tu contraseña?</a>
      <br />
      <span>¿No tienes una cuenta? <RouterLink to="/sign-up" class="link">Regístrate</RouterLink></span>
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

.error-message {
  background-color: #fee2e2;
  color: #dc2626;
  padding: 0.75rem;
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  border: 1px solid #fecaca;
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
