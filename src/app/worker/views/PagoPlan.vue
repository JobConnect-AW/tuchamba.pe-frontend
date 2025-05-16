<template>
  <!-- Layout 2-columnas -->
  <div class="pago-wrapper">

    <!-- ◀ Panel de revisión (izquierdo) -->
    <section class="panel-review">
      <header class="panel-header">
        <span class="title">Pago</span>
        <span class="user">James Cooper</span>
      </header>

      <div class="step-label">REVISAR Y REALIZAR PEDIDO</div>

      <div class="info-box">
        Verifica tu información y haz clic en <b>Confirmar</b>
      </div>
    </section>

    <!-- ▶ Resumen (derecho) -->
    <section class="panel-summary">
      <h2 class="price">PEN {{ priceDisplay }}</h2>

      <div class="account">Número de cuenta: 21 al 8798 46569</div>

      <div class="plan-card">
        <div class="plan-title">Cambio de Plan</div>
        <div class="plan-name">{{ planName }}</div>
      </div>

      <!-- Checkbox marketing -->
      <div class="marketing flex gap-2 mt-4 text-sm">
        <Checkbox v-model="marketingOk" binary />
        <span>
          Haz clic aquí para aceptar compartir tu correo electrónico con JobConnect.
          Revisa nuestra <a href="#" class="link">política de privacidad</a>.
        </span>
      </div>

      <!-- Botón Confirmar -->
      <Button
        label="Confirmar"
        class="p-button-warning w-full mt-8"
        :disabled="!marketingOk"
        @click="showDialog = true"
      />
    </section>

    <!-- ⬤ Dialog de éxito -->
    <Dialog
      v-model:visible="showDialog"
      modal
      :closable="true"
      :show-header="false"
      class="confirm-dialog w-[420px]"
    >
      <div class="dialog-body">
        <i class="pi pi-check-circle icon-success"></i>

        <h2 class="mt-4 text-sm font-medium text-gray-700">
          Se realizó el pago de forma exitosa!
        </h2>

        <h1 class="text-3xl font-extrabold mt-2">
          PEN {{ priceDisplay }}
        </h1>

        <div class="mt-6 mb-1 text-lg font-semibold">Cambio de Plan</div>
        <div class="text-sm text-gray-500">{{ planName }}</div>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

import Button   from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog   from 'primevue/dialog'

/* ─ Obtener el plan desde la URL ─ */
const route   = useRoute()
const planKey = route.params.plan              // 'basic' | 'expert'

const planName = computed(() =>
  planKey === 'basic'
    ? 'TuChamba Basic'
    : planKey === 'expert'
      ? 'TuChamba Expert'
      : 'Plan'
)

const priceDisplay = computed(() =>
  planKey === 'basic' ? '10,00' : '20,00'
)

/* Estados UI */
const marketingOk = ref(false)
const showDialog  = ref(false)
</script>

<style scoped>
/* ----- Layout principal ----- */
.pago-wrapper{
  display:flex;
  gap:2rem;
  padding:2rem;
  min-height:100vh;
  background:#f6f4ff;
}

/* ----- Panel izquierdo ----- */
.panel-review{
  flex:1 1 60%;
  background:#fff;
  border:2px solid #0066ff;
  border-radius:12px;
  padding:1.5rem;
}
.panel-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:.75rem;
}
.panel-header .title{ font-weight:600; }
.panel-header .user { font-size:.85rem; color:#0066ff; }
.step-label{
  font-size:.75rem;
  font-weight:700;
  color:#444;
  margin:1rem 0;
}
.info-box{
  background:#e5e5e5;
  padding:1rem;
  border-radius:6px;
  font-size:.9rem;
}

/* ----- Panel derecho ----- */
.panel-summary{
  flex:1 1 40%;
  max-width:360px;
  background:#fdfdff;
  border-radius:12px;
  padding:2rem;
}
.price{
  font-size:2rem;
  font-weight:800;
  text-align:center;
  margin-bottom:1.5rem;
}
.account{
  background:#eaeaea;
  padding:.4rem 1rem;
  border-radius:6px;
  font-size:.75rem;
  text-align:center;
  margin-bottom:1.25rem;
}
.plan-card{
  background:#fff;
  border-radius:8px;
  box-shadow:0 3px 8px rgba(0,0,0,.07);
  text-align:center;
  padding:1rem;
  margin-bottom:1.25rem;
}
.plan-title{ font-weight:600; margin-bottom:.25rem; }
.plan-name { font-size:.9rem; color:#6b7280; }
.link{ color:#0066ff; text-decoration:underline; }

/* ----- Dialog ----- */
.confirm-dialog :deep(.p-dialog-content){ text-align:center; padding:0; }
.dialog-body{
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:2rem 1.5rem 2.5rem;
}
.icon-success{
  font-size:4rem;
  color:#0066ff;
}
</style>
