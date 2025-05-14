<template>
    <div class="filters-container">
        <div class="filter-group">
            <label>Categoría del Servicio</label>
            <Dropdown v-model="selectedCategory" :options="categories" placeholder="Seleccionar categoría"
                class="w-full" />
        </div>

        <div class="filter-group">
            <label>Ubicación / Distrito</label>
            <Dropdown v-model="selectedLocation" :options="locations" placeholder="Seleccionar distrito"
                class="w-full" />
        </div>

        <div class="filter-group">
            <label>Disponibilidad</label>
            <Dropdown v-model="selectedAvailability" :options="availabilities" placeholder="Seleccionar disponibilidad"
                class="w-full" />
        </div>

        <div class="filter-group">
            <label>Rango de Pago Ofrecido</label>
            <Dropdown v-model="selectedPaymentRange" :options="paymentRanges" placeholder="Seleccionar rango"
                class="w-full" />
        </div>

        <div class="filter-group">
            <label>Estado de Oferta</label>
            <Dropdown v-model="selectedStatus" :options="statuses" placeholder="Seleccionar estado" class="w-full" />
        </div>

        <div class="filter-group">
            <label>Medio de Pago</label>
            <div class="payment-options">
                <div class="payment-option">
                    <Checkbox v-model="paymentMethods.yape" binary />
                    <label>Yape</label>
                </div>
                <div class="payment-option">
                    <Checkbox v-model="paymentMethods.transfer" binary />
                    <label>Transferencia Bancaria</label>
                </div>
                <div class="payment-option">
                    <Checkbox v-model="paymentMethods.cash" binary />
                    <label>Efectivo</label>
                </div>
                <div class="payment-option">
                    <Checkbox v-model="paymentMethods.others" binary />
                    <label>Otros</label>
                </div>
            </div>
        </div>

        <div class="filter-actions">
            <pv-button label="Aplicar" class="apply-button" />
            <pv-button label="Borrar" severity="secondary" text />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const selectedCategory = ref(null);
const selectedLocation = ref(null);
const selectedAvailability = ref(null);
const selectedPaymentRange = ref(null);
const selectedStatus = ref(null);

const paymentMethods = ref({
    yape: false,
    transfer: false,
    cash: false,
    others: false
});

const categories = ref(['Electricista', 'Plomero', 'Carpintero']);
const locations = ref(['Surquillo', 'San Miguel', 'Jesús María']);
const availabilities = ref(['Inmediata', 'Esta semana', 'Próxima semana']);
const paymentRanges = ref(['S/. 0 - 100', 'S/. 100 - 300', 'S/. 300+']);
const statuses = ref(['Nueva', 'En proceso', 'Finalizada']);
</script>

<style scoped>
.filters-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.filter-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.filter-group label {
    font-weight: 600;
    color: #333;
}

.payment-options {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.payment-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.filter-actions {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.apply-button {
    background-color: #FF9900;
    border: none;
}

.apply-button:hover {
    background-color: #e68a00;
}
</style>
