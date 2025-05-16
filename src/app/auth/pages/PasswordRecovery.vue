<script setup>
import PasswordRecoveryForm from "@/app/auth/components/PasswordRecoveryForm.vue";
</script>

<template>
  <section class="main-box bg-primary">
    <PasswordRecoveryForm />
  </section>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.main-box {
  height: 100vh;
  display: flex;

  flex-direction: row;
}
</style>
