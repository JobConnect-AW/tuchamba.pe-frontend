<template>
  <div class="card">
    <img :src="profile.image" alt="foto perfil" />
    <div class="name-bar">{{ profile.name }}</div>
    <div class="content">
      <div class="role">{{ profile.role }}</div>
      <div class="availability">
        <small>Disponibilidad</small>
        <div>{{ profile.availability[0] }} - {{ profile.availability[1] }}</div>
      </div>
      <div class="rating">⭐ {{ profile.rating }} ({{ profile.reviews }} calificaciones)</div>
      <div class="cert"><strong>Tipo de certificación:</strong> {{ profile.certification }}</div>
      <div class="experience">
        <strong>Años de experiencia:</strong> <span class="badge">{{ profile.experience }} años</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ profile: Object })
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  /* Asegura que la tarjeta llene el ancho del contenedor .profile-card */
  width: 100%;
  height: 100%;
}

.card img {
  width: 100%;
  height: 200px;             /* un poco más alta */
  object-fit: cover;
}

.name-bar {
  background: #0066cc;
  color: #fff;
  text-align: center;
  padding: 10px;             /* un poco más de padding */
  font-weight: bold;
  font-size: 1.2rem;         /* texto más grande */
}

.content {
  padding: 20px;             /* más espacio interior */
  display: flex;
  flex-direction: column;
  flex: 1;
}

.role {
  font-size: 1rem;
  margin-bottom: 8px;
}

.availability small { font-size: 0.8rem; color: #555; }
.availability div   { font-size: 0.9rem; margin-bottom: 10px; }

.rating { font-size: 0.9rem; margin-bottom: 12px; }

.cert {
  font-size: 0.9rem;
  margin-bottom: auto;
}

.experience {
  margin-top: 16px;
  font-size: 0.9rem;
}

.badge {
  background: #007bff;
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  margin-left: 6px;
  font-size: 0.8rem;
}
</style>
