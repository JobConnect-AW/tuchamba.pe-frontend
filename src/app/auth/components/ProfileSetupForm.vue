<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import { useRouter } from 'vue-router';
import { RegistrationService } from '../infrastructure/services/registration.service';

const router = useRouter();
const selectedProfileType = ref('');

const selectProfileType = (type) => {
  selectedProfileType.value = type;
};

const continueToForm = () => {
  if (!selectedProfileType.value) {
    alert('Por favor selecciona un tipo de perfil');
    return;
  }

  const registrationData = RegistrationService.getRegistrationData();
  if (!registrationData) {
    router.push('/sign-up');
    return;
  }

  if (selectedProfileType.value === 'customer') {
    router.push('/customer-setup');
  } else {
    router.push('/worker-setup');
  }
};
</script>

<template>
  <div class="profile-setup">
    <h2 class="text-2xl !font-bold !mb-5">Selecciona tu tipo de perfil</h2>

    <div class="profile-options">
      <div
        class="profile-option"
        :class="{ active: selectedProfileType === 'customer' }"
        @click="selectProfileType('customer')"
      >
        <div class="option-icon">👤</div>
        <h3>Cliente</h3>
        <p>Busco servicios técnicos para mis necesidades</p>
      </div>

      <div
        class="profile-option"
        :class="{ active: selectedProfileType === 'worker' }"
        @click="selectProfileType('worker')"
      >
        <div class="option-icon">🔧</div>
        <h3>Trabajador</h3>
        <p>Ofrezco servicios técnicos especializados</p>
      </div>
    </div>

    <Button
      label="Continuar"
      severity="warn"
      class="w-full mt-4"
      @click="continueToForm"
      :disabled="!selectedProfileType"
    />
  </div>
</template>

<style scoped>
.profile-setup {
  max-width: 500px;
  margin: auto;
  padding: 2rem;
}

.profile-options {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.profile-option {
  flex: 1;
  padding: 1.5rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.profile-option:hover {
  border-color: #3B82F6;
}

.profile-option.active {
  border-color: #3B82F6;
  background-color: #f0f8ff;
}

.option-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.profile-option h3 {
  margin: 0.5rem 0;
  font-weight: bold;
}

.profile-option p {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
}
</style>
