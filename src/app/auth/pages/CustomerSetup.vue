<script setup>
import CustomerSetupForm from '../components/CustomerSetupForm.vue';
</script>

<template>
  <div class="main-box">
    <div class="main-column">
      <div class="logo">
        <img src="/public/favicon.svg" alt="JobConnect" class="logo-img" />
        <h1 class="text-xl !font-bold">JobConnect</h1>
      </div>

      <div class="form">
        <CustomerSetupForm />
      </div>
    </div>

    <div class="!hidden md:!flex right-column">
      <h2 class="text-3xl !font-bold !mb-5 max-w-[80%] text-pretty">Como cliente, encuentra los mejores técnicos para tus proyectos.</h2>
      <img src="/hero_login.png" alt="Customer Image" class="login-image" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  top: 0;
  left: 0;
  margin: 1rem;
  position: absolute;
}

.main-box {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

.main-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  position: relative;
}

.right-column {
  flex: 1;
  background-color: #3B82F6;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 4rem;
  color: white;
}

.login-image {
  position: absolute;
  width: 30%;
  right: 0;
  bottom: 10%;
}
</style>