<template>
  <div class="planes-page">
    <Sidebar />

    <div class="content">
      <HeaderBarPlan />

      <!-- HEADER -->
      <div class="header">
        <button class="btn-plans">Plans</button>
        <h1>Freemium Model</h1>
        <p>Choose the plan that best fits your needs and start growing your own business with TuChamba.</p>
      </div>

      <!-- CARDS CONTAINER -->
      <div class="cards-container">
        <PlanCard
          plan-key="standard"
          title="TuChamba Standard"
          price="0"
          description="Perfect for getting started with offering your services"
          :features="[
            'Acceso a todas las oportunidades',
            'Perfil profesional básico',
            '5% de comisión estándar'
          ]"
          button-text="Stay Free"
          :selected="cards.standard"
          @select="onSelect"
        />

        <PlanCard
          plan-key="basic"
          title="TuChamba Basic"
          price="10"
          description="Ideal for professionals looking to stand out"
          :features="[
            'Todo en Standard',
            'Ver competidores en propuestas',
            'Comisión reducida 2.5%',
            'Prioridad en resultados de búsqueda'
          ]"
          button-text="Choose Basic"
          :selected="cards.basic"
          @select="onSelect"
        />

        <PlanCard
          plan-key="expert"
          title="TuChamba Expert"
          price="20"
          description="For professionals seeking maximum performance"
          :features="[
            'Todo en Basic',
            'Webinars exclusivos para captar clientes',
            'Sin comisión en pagos',
            'Estado de propuestas de competidores',
            'Notificaciones de oportunidades'
          ]"
          button-text="Choose Expert"
          :selected="cards.expert"
          @select="onSelect"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import HeaderBarPlan from '@/app/worker/components/public/HeaderBarPlan.vue';
import PlanCard from '@/app/worker/components/PlanCard.vue';

const cards = reactive({
  standard: true,
  basic: false,
  expert: false
});

function onSelect(planKey) {
  cards.standard = (planKey === 'standard');
  cards.basic    = (planKey === 'basic');
  cards.expert   = (planKey === 'expert');
}
</script>

<style scoped>
.planes-page {
  display: flex;
  height: 100vh;
  background: #f3f4f6;
}
.content {
  flex: 1;
  overflow: auto;
  padding: 2rem;
}
.header {
  text-align: center;
  margin-bottom: 3rem;
}
.header .btn-plans {
  margin-bottom: 1.5rem;
  padding: 0.5rem 1.5rem;
  border: 2px solid #d1d5db;
  border-radius: 9999px;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
  color: #4b5563;
  background: white;
  cursor: pointer;
  transition: border-color 0.2s;
}
.header .btn-plans:hover {
  border-color: #9ca3af;
}
.header h1 {
  font-size: 3rem;
  font-weight: 800;
  color: #111827;
  margin: 0.5rem 0;
}
.header p {
  max-width: 600px;
  margin: 0 auto;
  color: #6b7280;
  font-size: 1rem;
}

/* Aquí está la magia para las 3 columnas */
.cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
}

/* Cada PlanCard ocupará al menos 280px, crecerá hasta un máximo */
.cards-container > * {
  flex: 1 1 280px;
  max-width: 320px;
}
</style>
