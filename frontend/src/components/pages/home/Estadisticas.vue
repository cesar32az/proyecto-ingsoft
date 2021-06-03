<template>
  <v-container>
    <PieChart :chartdata="chartdata" />
  </v-container>
</template>

<script>
import PieChart from '../../charts/PieChart.vue';
export default {
  name: 'Estadisticas',
  components: { PieChart },
  data() {
    return {
      chartdata: {
        type: 'pie',
        labels: ['Disponible', 'Gastado'],
        datasets: [
          {
            label: 'Total A',
            data: [10, 100],
            backgroundColor: ['#FF1744', '#304FFE'],
          },
        ],
      },
    };
  },
};
</script>

<style></style>
