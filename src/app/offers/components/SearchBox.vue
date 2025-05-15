<template>
    <div class="search-box">
        <input type="text" placeholder="Búsqueda" v-model="searchQuery" class="search-input" />
        <button class="search-button">
            <i class="pi pi-search"></i>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
</script>

<style scoped>
.search-box {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.search-input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #DDD;
    border-radius: 4px;
    font-size: 1rem;
}

.search-button {
    padding: 0.5rem 1rem;
    background-color: #2A58AE;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.search-button:hover {
    background-color: #1e3f7c;
}
</style>