<script setup>
const props = defineProps({
    total: {
        type: Number,
        default: 0
    },
    suggested: {
        type: Object,
        default: () => ({
            label: '',
            value: 0
        })
    },
    suggested_2: {
        type: Object,
        default: () => ({
            label: '',
            value: 0
        })
    }
});
</script>
<template>
    <div class="suggested-container">
        <div class="total-number">{{ props.total }}</div>
        
        <div class="suggestions-list">
            <div class="suggestion-item">
                <span class="suggestion-label">{{ props.suggested.label }}</span>
                <span class="suggestion-value" style="color: #1C4790;">{{ props.suggested.value }}</span>
            </div>

            <div class="suggestion-item">
                <span class="suggestion-label">{{ props.suggested_2.label }}</span>
                <span class="suggestion-value">{{ props.suggested_2.value }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.suggested-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    height: 100%;
    padding: 2rem;
}

.total-number {
    font-size: 5rem;
    font-weight: 700;
    color: #0066FF;
    align-self: center;
}

.suggestions-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
}

.suggestion-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.25rem;
}

.suggestion-label {
    font-size: 1rem;
    color: #666;
    font-weight: 600;
}

.suggestion-value {
    font-size: 2rem;
    font-weight: 700;
    color: #FF9900;
}

.suggestion-item:last-child .suggestion-value {
    color: #FF9900;
}
</style>