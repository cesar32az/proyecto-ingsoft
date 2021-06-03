<template>
  <v-card>
    <v-card-title>
      Gastos registrados
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Buscar"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="gastos" :search="search" :items-per-page="5">
    </v-data-table>
  </v-card>
</template>

<script>
import { authHeader } from '../../../services/auth-header.service';

export default {
  data: () => {
    return {
      search: '',
      headers: [
        { text: 'Descripcion', value: 'gasto', align: 'start' },
        { text: 'Costo', value: 'costo' },
        { text: 'Fecha', value: 'fecha' },
        { text: 'Categoría', value: 'categoria' },
      ],
      gastos: [],
    };
  },
  methods: {
    async getGastos(){
      try {
        let response = await this.$http.get('/api/gastos', { headers: authHeader() });
        let gastos = response.data.gastos;
        this.gastos = gastos
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.getGastos()
  },
};
</script>

<style></style>
