<script setup>
import PasswordRecoveryForm from "@/app/auth/components/PasswordRecoveryForm.vue";
</script>

<template>
  <div class="main-box">
    <div class="main-column">
      <div class="form">
        <!-- Aquí usamos el LoginForm -->
        <PasswordRecoveryForm />
      </div>
    </div>


    <div class="right-column">
      <!-- Puedes agregar contenido aquí después -->
    </div>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
