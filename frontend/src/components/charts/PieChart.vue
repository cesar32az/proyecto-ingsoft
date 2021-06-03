<script>
import { Pie } from 'vue-chartjs';
export default {
  extends: Pie,
    props: {
        chartdata:{
            type: Object,
            default: null
        }
    },
  data: () => ({
    options: {
      animation: {
        animateScale: true,
      },
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Presupuesto',
        fontColor: 'white',
        fontSize: 20,
      },
      legend: {
        labels: {
          fontColor: 'white',
          fontSize: 16,
        },
      },
      tooltips: {
        bodyFontSize: 14,
        titleFontSize: 16,
      },
    },
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
