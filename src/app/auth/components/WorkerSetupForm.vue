<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import InputNumber from 'primevue/inputnumber';
import Chips from 'primevue/chips';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import { SignUpUseCase } from '../application/use-cases/sign-up.usecase';
import { ApiAuthRepository } from '../infrastructure/repositories/api-auth.repository';
import { HttpService } from '@/app/shared/infrastructure/services/http.service';
import { RegistrationService } from '../infrastructure/services/registration.service';
import { CreateWorkerDTO } from '../application/dtos/sign-up.dto';
import { v4 } from 'uuid';

const router = useRouter();
const firstName = ref('');
const lastName = ref('');
const phone = ref('');
const location = ref('');
const bio = ref('');
const skills = ref([]);
const experience = ref(0);
const certifications = ref([]);
const avatar = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

const apiAuthRepository = new ApiAuthRepository(HttpService.getInstance());
const signUpUseCase = new SignUpUseCase(apiAuthRepository);

const createWorker = async () => {
  try {
    isLoading.value = true;
    errorMessage.value = '';

    const authService = new AuthService();
    const token = authService.getToken();

    if (!token) {
      return router.push('/sign-up');
    }

    if (!firstName.value || !lastName.value) {
      throw new Error('El nombre y apellido son obligatorios');
    }

    const workerData = new CreateWorkerDTO(
      v4(),
      firstName.value,
      lastName.value,
      phone.value,
      'WORKER',
      location.value,
      bio.value,
      skills.value || [],
      experience.value || 0,
      certifications.value || [],
      avatar.value || ''
    );

    await signUpUseCase.executeCreateWorker(workerData, token);

    RegistrationService.clearRegistrationData();

    router.push('/dashboard/worker');
  } catch (error) {
    errorMessage.value = error.message || 'Error al crear el perfil de trabajador';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="worker-setup">
    <h2 class="text-2xl !font-bold !mb-5">Completa tu perfil de Trabajador</h2>

    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <div class="form-group">
      <label for="firstName">Nombre *</label>
      <InputText id="firstName" v-model="firstName" class="w-full" :disabled="isLoading" />
    </div>

    <div class="form-group">
      <label for="lastName">Apellido *</label>
      <InputText id="lastName" v-model="lastName" class="w-full" :disabled="isLoading" />
    </div>

    <div class="form-group">
      <label for="phone">Teléfono</label>
      <InputText id="phone" v-model="phone" class="w-full" :disabled="isLoading" />
    </div>

    <div class="form-group">
      <label for="location">Ubicación</label>
      <InputText id="location" v-model="location" class="w-full" :disabled="isLoading" />
    </div>

    <div class="form-group">
      <label for="bio">Biografía</label>
      <Textarea id="bio" v-model="bio" class="w-full" rows="3" :disabled="isLoading" />
    </div>

    <div class="form-group">
      <label for="skills">Habilidades</label>
      <Chips id="skills" v-model="skills" class="w-full" :disabled="isLoading" placeholder="Agrega tus habilidades" />
    </div>

    <div class="form-group">
      <label for="experience">Años de experiencia</label>
      <InputNumber id="experience" v-model="experience" class="w-full" :min="0" :disabled="isLoading" />
    </div>

    <div class="form-group">
      <label for="certifications">Certificaciones</label>
      <Chips id="certifications" v-model="certifications" class="w-full" :disabled="isLoading"
        placeholder="Agrega tus certificaciones" />
    </div>

    <div class="form-group">
      <label for="avatar">URL del Avatar</label>
      <InputText id="avatar" v-model="avatar" class="w-full" :disabled="isLoading"
        placeholder="https://ejemplo.com/avatar.jpg" />
    </div>

    <Button :label="isLoading ? 'Creando perfil...' : 'Crear Perfil de Trabajador'" severity="warn" class="w-full mt-3"
      @click="createWorker" :disabled="isLoading" />
  </div>
</template>

<style scoped>
.worker-setup {
  max-width: 500px;
  margin: auto;
  padding: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
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
