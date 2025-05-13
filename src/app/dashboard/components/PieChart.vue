
<template>
    <Chart type="pie" :data="chartData" :options="chartOptions"/>
</template>

<script setup>
    const props = defineProps({
        value_1: {
            type: Object,
            default: () => ({
                label: '',
                value: 0
            })
        },
        value_2: {
            type: Object,
            default: () => ({
                label: '',
                value: 0
            })
        }
    });
    const {value_1, value_2} = props;
    const chartData = {
        labels: [value_1.label, value_2.label],
        datasets: [{
            data: [value_1.value, value_2.value],
            backgroundColor: ['#2A58AE', '#FF9900'],
            borderWidth: 0
        }]
    };
    
    const chartOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
            tooltip: {
                enabled: true
            }
        }
    };
</script>
