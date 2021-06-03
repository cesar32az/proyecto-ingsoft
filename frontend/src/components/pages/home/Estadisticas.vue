<template>
  <v-container>
    <PieChart :chartdata="chartdata" :options="options" v-if="show" />
    <v-row justify="center" v-if="!show">
      <v-col cols="12" md="4">
        <v-card outlined>
          <v-card-title class="justify-center"> Aún no has agregado tu presupuesto </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn color="blue" to="/presupuesto">ir a presupuesto</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { authHeader } from '../../../services/auth-header.service';
import PieChart from '../../charts/PieChart.vue';
export default {
  name: 'Estadisticas',
  components: { PieChart },
  data() {
    return {
      show: false,
      chartdata: {
        type: 'pie',
        labels: ['Disponible', 'Gastado'],
        datasets: [
          {
            label: 'Total A',
            data: [10, 20],
            backgroundColor: ['#FF1744', '#304FFE'],
          },
        ],
      },
      options: {
        animation: {
          animateScale: true,
        },
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: '',
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
      presupuesto: null,
      disponible: null,
      totalGastos: null,
    };
  },

  methods: {
    async getPresupuesto() {
      try {
        let response = await this.$http.get('/api/presupuesto', { headers: authHeader() });
        let presupuesto = response.data.presupuesto.presupues;
        console.log(presupuesto);
        if (presupuesto) {
          this.presupuesto;
        } else {
          this.presupuesto = null;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async getTotalGasto() {
      try {
        let response = await this.$http.get('/api/gastos/total', { headers: authHeader() });
        let totalGastos = response.data.totalGastos;
        if (totalGastos) {
          console.log(totalGastos);
          this.totalGastos;
        } else {
          this.totalGastos = null;
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fillChart() {
      this.getPresupuesto();
      this.getTotalGasto();
      console.log(this.presupuesto);
      // if (presupuesto) {
      //   this.options.title.text = `Presupuesto total ${this.presupuesto}`;
      //   this.chartdata.datasets[0].data[0] = presupuesto;
      //   this.show = true;
      // }
    },
  },

  mounted() {
    this.getPresupuesto();
  },
};
</script>

<style></style>
