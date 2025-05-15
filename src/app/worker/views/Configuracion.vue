<template>
  <div class="config">
    <!-- Reutiliza tu Sidebar -->
    <Sidebar />

    <div class="config__content">
      <!-- Encabezado específico de Configuración -->
      <HeaderBarConfiguracion />

      <section class="config__section">
        <div class="config__grid">
          <!-- PANEL PRINCIPAL -->
          <div class="card">
            <!-- Account -->
            <h2 class="card__header">Account</h2>
            <div class="form-group">
              <label>Profile picture</label>
              <input type="file" />
            </div>
            <div class="form-group">
              <label>Name</label>
              <input v-model="form.name" disabled />
            </div>
            <div class="form-group">
              <label>Username</label>
              <input v-model="form.username" disabled />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="form.email" disabled />
              <span class="verify-text">
                Email not verified. <a href="#">Verify now</a>
              </span>
            </div>

            <!-- Preferences -->
            <h2 class="card__header" style="margin-top:2rem">Preferences</h2>
            <div class="form-group">
              <ToggleSwitch v-model="form.facebookConnect">Facebook Connect</ToggleSwitch>
            </div>
            <div class="form-group">
              <ToggleSwitch v-model="form.googleConnect">Google+ Connect</ToggleSwitch>
            </div>
            <div class="form-group">
              <ToggleSwitch v-model="form.webEffects">Efectos Web</ToggleSwitch>
            </div>
            <div class="form-group">
              <ToggleSwitch v-model="form.animation">Animación</ToggleSwitch>
            </div>
            <div class="form-group">
              <ToggleSwitch v-model="form.allowLocation">Permitir Ubicación</ToggleSwitch>
            </div>
            <div class="form-group">
              <ToggleSwitch v-model="form.listeningExercises">Listening exercises</ToggleSwitch>
            </div>

            <!-- Acciones -->
            <div class="form-actions">
              <button class="secondary" @click="logout">LOGOUT</button>
              <button class="secondary" @click="exportData">EXPORT MY DATA</button>
              <button class="danger" @click="deleteAccount">DELETE MY ACCOUNT</button>
            </div>
          </div>

          <!-- PANEL LATERAL -->
          <div class="card--sidebar">
            <!-- Información Personal -->
            <h2 class="card__header small">Información Personal</h2>
            <div class="form-group">
              <label>Dirección</label>
              <input v-model="form.address" placeholder="Dirección" />
            </div>
            <div class="form-group">
              <label>Número celular</label>
              <input v-model="form.phone" placeholder="Número celular" />
            </div>
            <div class="form-group">
              <label>Idioma</label>
              <input v-model="form.language" placeholder="Idioma" />
            </div>

            <!-- Fondos -->
            <div class="funds">
              <span class="funds-amount">$ **** 4578</span>
              <span class="funds-label">Crédito</span>
            </div>
            <button class="primary" style="width:100%; margin-bottom:1rem">
              Otros métodos de pago
            </button>

            <!-- Mi Plan -->
            <h2 class="card__header small">Mi Plan</h2>
            <!-- Plan Standard estático -->
            <div class="static-plan" style="width:100%; margin-bottom:0.5rem">
              Plan Standard
            </div>
            <!-- Botón Cambiar plan -->
            <button
              class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              @click="$router.push({ name: 'Planes' })"
            >
              Cambiar de plan
            </button>

            <!-- Footer legal -->
            <div class="config__footer">Legal | Privacidad | Soporte</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import HeaderBarConfiguracion from '../components/public/HeaderBarConfiguracion.vue'
import ToggleSwitch from '../components/public/ToggleSwitch.vue'

const form = reactive({
  profileImage: '',
  name: 'James Cooper',
  username: 'JCpper12',
  email: 'hello@designdrops.io',
  facebookConnect: false,
  googleConnect: true,
  webEffects: true,
  animation: true,
  allowLocation: true,
  listeningExercises: true,
  address: '',
  phone: '',
  language: ''
})

function logout() {
  // lógica de logout
}
function exportData() {
  // lógica para exportar datos
}
function deleteAccount() {
  // lógica para eliminar cuenta
}
</script>

<style scoped>
/* Contenedor general */
.config {
  display: flex;
  min-height: 100vh;
  background: #f0f2f5;
}

/* Contenido principal */
.config__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Sección interior */
.config__section {
  padding: 2rem;
}

/* Grid: 2 columnas principal + lateral */
.config__grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}

/* Tarjeta principal y sidebar */
.card,
.card--sidebar {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
}
.card--sidebar { padding: 1rem; }

/* Encabezados de tarjeta */
.card__header { font-size: 1.25rem; margin-bottom: 1rem; color: #444; }
.card__header.small { font-size: 1rem; margin-top: 1rem; }

/* Grupos de formulario */
.form-group { display: flex; align-items: center; margin-bottom: 1rem; }
.form-group label { width: 140px; color: #666; font-weight: 500; }
.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="file"] { flex: 1; padding: 0.5rem 0.75rem; border: 1px solid #ccc; border-radius: 4px; font-size: 0.95rem; }

/* ToggleSwitch (dentro de form-group) */
.form-group >>> label { width: auto; margin-right: 1rem; }

/* Mensaje de verificación */
.verify-text { margin-left: 1rem; font-size: 0.9rem; color: #e03131; }

/* Acciones del panel principal */
.form-actions { display: flex; justify-content: flex-end; gap: 1rem; }

/* Fondos */
.funds { display: flex; justify-content: space-between; align-items: center; margin: 1rem 0; }
.funds-amount { font-family: monospace; font-size: 1.1rem; }
.funds-label { color: #ee964b; font-weight: 600; }

/* Plan Standard estático */
.static-plan {
  background: #007bff;
  color: #fff;
  text-align: center;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: default;
  opacity: 0.75;
}

/* Botones generales */
button { cursor: pointer; border: none; border-radius: 4px; font-weight: 500; padding: 0.5rem 1rem; transition: background 0.2s; }
button:hover { filter: brightness(0.9); }
button.primary { background: #007bff; color: #fff; }
button.secondary { background: #6c757d; color: #fff; }
button.danger { background: #dc3545; color: #fff; }

/* Footer legal */
.config__footer { text-align: center; font-size: 0.8rem; color: #999; margin-top: 2rem; }
</style>
