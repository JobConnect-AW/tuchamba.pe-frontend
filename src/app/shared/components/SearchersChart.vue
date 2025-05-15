<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  }
})
const chartData = {
  labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  datasets: [
    {
      backgroundColor: '#FF9900',
      data: props.data,
      borderRadius: 10,
      barThickness: 10,
    }
  ]
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
      position: 'bottom'
    }
  }
};
</script>

<template>
  <Chart type="bar" :data="chartData" :options="chartOptions" style="height: 310px;"/>
</template>