<!-- src/app/cliente/pages/Configuracion-Cliente.vue -->
<template>
  <div class="config">
    <Sidebar />

    <div class="config__content">
      <HeaderBarConfiCliente />

      <section class="config__section">
        <div class="config__grid">
          <!-- PANEL PRINCIPAL -->
          <div class="card">
            <h2 class="card__header">Account</h2>

            <!-- Profile Picture -->
            <div class="form-group">
              <label>Profile picture</label>
              <input type="file" accept="image/*" @change="onFileChange" />
            </div>

            <!-- Name / Username / Email -->
            <div class="form-group">
              <label>Name</label>
              <input type="text" v-model="form.name" />
            </div>
            <div class="form-group">
              <label>Username</label>
              <input type="text" v-model="form.username" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input type="email" v-model="form.email" />
            </div>

            <!-- Preferences -->
            <h2 class="card__header" style="margin-top:2rem">Preferences</h2>
            <div class="form-group">
              <ToggleSwitch v-model="form.facebookConnect">
                Facebook Connect
              </ToggleSwitch>
            </div>
            <div class="form-group">
              <ToggleSwitch v-model="form.googleConnect">
                Google+ Connect
              </ToggleSwitch>
            </div>
            <div class="form-group">
              <ToggleSwitch v-model="form.webEffects">
                Efectos Web
              </ToggleSwitch>
            </div>
            <div class="form-group">
              <ToggleSwitch v-model="form.animation">
                Animación
              </ToggleSwitch>
            </div>
            <div class="form-group">
              <ToggleSwitch v-model="form.allowLocation">
                Permitir Ubicación
              </ToggleSwitch>
            </div>

            <!-- Actions -->
            <div class="form-actions">
              <button class="secondary" @click="logout()">LOGOUT</button>
              <button class="secondary" @click="exportData()">
                EXPORT MY DATA
              </button>
              <button class="danger" @click="deleteAccount()">
                DELETE MY ACCOUNT
              </button>
            </div>
          </div>

          <!-- PANEL LATERAL -->
          <div class="card--sidebar">
            <!-- Información Personal -->
            <h2 class="card__header small">Información Personal</h2>
            <div class="form-group">
              <label>Dirección</label>
              <input type="text" v-model="form.address" />
            </div>
            <div class="form-group">
              <label>Número celular</label>
              <input type="text" v-model="form.phone" />
            </div>
            <div class="form-group">
              <label>Idioma</label>
              <input type="text" v-model="form.language" />
            </div>

            <!-- Fondos -->
            <div class="funds">
              <span class="funds-amount">$ **** 4578</span>
              <span class="funds-label">Crédito</span>
            </div>
            <button class="primary" style="width:100%; margin-bottom:1rem">
              Otros métodos de pago
            </button>

            <!-- Pago Seguro -->
            <h2 class="card__header small" style="margin-top:2rem">
              Pago Seguro
            </h2>
            <div class="form-group">
              <ToggleSwitch v-model="form.securePayment">
                Requiere PIN para completar la transacción
              </ToggleSwitch>
            </div>

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
import HeaderBarConfiCliente from '@/app/cliente/components/public/HeaderBarConfiCliente.vue'
import ToggleSwitch         from '@/app/cliente/components/public/ToggleSwitch.vue'

const form = reactive({
  profileImage:     null,
  name:             'James Cooper',
  username:         'JCpper12',
  email:            'hello@designdrops.io',
  facebookConnect:  false,
  googleConnect:    true,
  webEffects:       true,
  animation:        true,
  allowLocation:    true,
  address:          '',
  phone:            '',
  language:         '',
  securePayment:    false
})

function onFileChange(e) {
  const file = e.target.files?.[0]
  if (file) {
    form.profileImage = file
    // si deseas mostrar vista previa:
    // form.profilePreview = URL.createObjectURL(file)
  }
}

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
.config {
  display: flex;
  min-height: 100vh;
  background: #f0f2f5;
}
.config__content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.config__section {
  padding: 2rem;
}
.config__grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.5rem;
}
.card,
.card--sidebar {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  padding: 1.5rem;
}
.card--sidebar {
  padding: 1rem;
}
.card__header {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #444;
}
.card__header.small {
  font-size: 1rem;
  margin-top: 1rem;
}
.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.form-group label {
  width: 140px;
  color: #666;
  font-weight: 500;
}
.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="file"] {
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.95rem;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}
.funds {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}
.funds-amount {
  font-family: monospace;
  font-size: 1.1rem;
}
.funds-label {
  color: #ee964b;
  font-weight: 600;
}
button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: background 0.2s;
}
button.primary {
  background: #007bff;
  color: #fff;
  margin-bottom: 1rem;
}
button.secondary {
  background: #6c757d;
  color: #fff;
}
button.danger {
  background: #dc3545;
  color: #fff;
}
.config__footer {
  text-align: center;
  font-size: 0.8rem;
  color: #999;
  margin-top: 2rem;
}
</style>
