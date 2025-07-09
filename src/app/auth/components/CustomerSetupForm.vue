<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import { SignUpUseCase } from '../application/use-cases/sign-up.usecase';
import { ApiAuthRepository } from '../infrastructure/repositories/api-auth.repository';
import { HttpService } from '@/app/shared/infrastructure/services/http.service';
import { RegistrationService } from '../infrastructure/services/registration.service';
import { CreateCustomerDTO } from '../application/dtos/sign-up.dto';
import { v4 } from 'uuid';
import { AuthService } from '@/app/shared/infrastructure/services/auth.service';

const router = useRouter();
const firstName = ref('');
const lastName = ref('');
const phone = ref('');
const location = ref('');
const bio = ref('');
const isLoading = ref(false);
const errorMessage = ref('');

const apiAuthRepository = new ApiAuthRepository(new HttpService());
const signUpUseCase = new SignUpUseCase(apiAuthRepository);

const createCustomer = async () => {
  try {
    isLoading.value = true;
    errorMessage.value = '';

    if (!firstName.value || !lastName.value) {
      throw new Error('El nombre y apellido son obligatorios');
    }
    const authService = new AuthService();
    const token = authService.getToken();

    if (!token) {
      return router.push('/sign-up');
    }

    const customerData = new CreateCustomerDTO(
      v4(),
      firstName.value,
      lastName.value,
      phone.value,
      'CUSTOMER',
      location.value,
      bio.value
    );

    await signUpUseCase.executeCreateCustomer(customerData, token);

    RegistrationService.clearRegistrationData();

    router.push('/dashboard/customer');
  } catch (error) {
    errorMessage.value = error.message || 'Error al crear el perfil de cliente';
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div class="customer-setup">
    <h2 class="text-2xl !font-bold !mb-5">Completa tu perfil de Cliente</h2>

    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <div class="flex gap-2">
      <div class="form-group">
        <label for="firstName">Nombre *</label>
        <InputText id="firstName" v-model="firstName" class="w-full" :disabled="isLoading" />
      </div>

      <div class="form-group">
        <label for="lastName">Apellido *</label>
        <InputText id="lastName" v-model="lastName" class="w-full" :disabled="isLoading" />
      </div>
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

    <Button :label="isLoading ? 'Creando perfil...' : 'Crear Perfil de Cliente'" severity="warn" class="w-full mt-3"
      @click="createCustomer" :disabled="isLoading" />
  </div>
</template>

<style scoped>
.customer-setup {
  max-width: 400px;
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
