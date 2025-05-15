<script setup>
import SignUpForm from "@/app/auth/components/SignUpForm.vue";
</script>

<template>
  <div class="main-box">
    <div class="main-column">
      <div class="logo">
        <img src="/public/favicon.svg" alt="JobConnect" class="logo-img" />
        <h1>JobConnect</h1>
      </div>

      <div class="form">
        <!-- Aquí usamos el LoginForm -->
        <SignUpForm />
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
