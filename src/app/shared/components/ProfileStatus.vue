
<template>
    <div class="profile-status">
        <div class="chart-container">
            <Chart type="doughnut" :data="chartData" :options="chartOptions"/>
            <div class="completion-center">{{ props.total }}%</div>
        </div>
        <p class="completion-text">Completado</p>
    </div>
</template>

<script setup>
    const props = defineProps({
        total: {
            type: Number,
            required: true
        }
    });
    const chartData = {
        datasets: [{
            data: [props.total,  100-props.total],
            backgroundColor: ['#FF9900', '#EAEEF1'],
            borderWidth: 0
        }]
    };
    
    const chartOptions = {
        cutout: '80%',
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        }
    };
</script>

<style scoped>
.profile-status {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 1rem;
    padding: 1rem;
}

.chart-container {
    width: 100%;
    max-width: 200px;
    aspect-ratio: 1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.chart-container :deep(canvas) {
    width: 100% !important;
    height: 100% !important;
}

.completion-center {
    position: absolute;
    font-size: 2rem;
    font-weight: 700;
    color: #1A1A1A;
}

.completion-text {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1A1A1A;
    margin: 0;
}
</style>
