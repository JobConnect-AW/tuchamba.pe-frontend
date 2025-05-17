<template>
  <div class="offer-card">
    <div class="card-content">
      <div class="left-section">
        <div class="offer-header">
          <div class="offer-icon">
            <img src="/repair.png" class="fas fa-briefcase">
          </div>
          <div class="offer-title">{{ offer.title }}</div>
        </div>

        <div class="description-title">Descripción:</div>

        <div class="offer-description">
          {{ offer.description }}
        </div>
      </div>

      <div class="right-section">
        <div class="offer-details">
          <div class="detail-row">
            <label>Método de Pago:</label>
            <span>{{ offer.payment.method }}</span>
          </div>
          <div class="detail-row">
            <label>Categoría de Servicio:</label>
            <span>{{ offer.category }}</span>
          </div>
          <div class="detail-row">
            <label>Pago:</label>
            <span>S/. {{ offer.payment.amount }}</span>
          </div>
          <div class="detail-row">
            <label>Duración del Proyecto:</label>
            <span>{{ offer.duration }}</span>
          </div>
        </div>

        <div class="offer-status">Estado: {{ offer.status }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  offer: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.offer-card {
  background-color: #ffffff;
  border-radius: 15px;
}

.card-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.left-section {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
}

.right-section {
  background-color: #0066ff;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

.offer-header {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.offer-icon {
  background-color: #2a58ae;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.offer-title {
  font-weight: 700;
  font-size: 1.3rem;
  color: #1a1a1a;
}

.offer-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
}

.offer-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail-row label {
  color: white;
  font-weight: 600;
}

.detail-row span {
  color: white;
  font-weight: 500;
}

.offer-status {
  padding: 0.5rem;
  background-color: #ff9900;
  color: white;
  text-align: center;
  border-radius: 10px;
  font-weight: 600;
  margin-top: auto;
}

@media (max-width: 768px) {
  .card-content {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}
.description-title {
  padding: 0.6rem;
  font-size: large;
  background-color: #ff9900;
  color: white;
  text-align: center;
  border-radius: 10px;
  font-weight: 500;
  max-width: min-content;
}
</style>
