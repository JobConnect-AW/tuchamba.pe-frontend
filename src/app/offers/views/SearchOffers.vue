<template>
    <div class="search-offers-container">
        <section class="filters-section">
            <h2 class="title">Filtros de Búsqueda</h2>
            <SearchBox />
            <SearchFilters />
        </section>
        <section class="offers-section">
            <div class="offers-grid">
                <OfferCard v-for="offer in offers" :key="offer.id" :offer="offer" />
            </div>
        </section>
    </div>
</template>

<script setup>
import SearchBox from '../components/SearchBox.vue';
import SearchFilters from '../components/SearchFilters.vue';
import OfferCard from '../components/OfferCard.vue';
import { ref } from 'vue';

const offers = ref([
    {
        id: 1,
        title: 'Instalación eléctrica en local comercial',
        description: 'Se requiere un electricista con experiencia para la instalación completa de cableado, tomacorrientes y luminarias en un pequeño local de 50 m² en Surquillo. Se proporcionarán los materiales.',
        payment: {
            method: 'Yape',
            amount: 600
        },
        category: 'Electricista',
        duration: '2 día/s',
        status: 'NUEVA'
    },
    {
        id: 2,
        title: 'Mantenimiento de sistema eléctrico en departamento',
        description: 'Busco técnico para revisar y reparar problemas de conexión en tomacorrientes y luces en un departamento de 3 habitaciones en San Miguel. Trabajo sencillo.',
        payment: {
            method: 'Yape',
            amount: 250
        },
        category: 'Electricista',
        duration: '1 día/s',
        status: 'NUEVA'
    },
    {
        id: 3,
        title: 'Instalación de focos LED y timbre inteligente',
        description: 'Necesito un profesional para instalar 10 focos LED y un timbre con cámara en una casa familiar ubicada en Jesús María.',
        payment: {
            method: 'Yape',
            amount: 180
        },
        category: 'Electricista',
        duration: '1 día/s',
        status: 'NUEVA'
    }
]);
</script>

<style scoped>
.search-offers-container {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    padding: 2rem;
    font-family: 'Inter', sans-serif;
    background-color: #EAEEF1;
}

.filters-section {
    background-color: #FFFFFF;
    border-radius: 15px;
    padding: 1.5rem;
}

.title {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.offers-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

@media (max-width: 992px) {
    .search-offers-container {
        grid-template-columns: 1fr;
    }
}
</style>