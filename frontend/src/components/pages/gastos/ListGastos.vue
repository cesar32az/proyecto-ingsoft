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
      gastos: [
        { gasto: 'pan', costo: 100, fecha: '2021-02-02', categoria: 'comida' },
        { gasto: 'Luz', costo: 500, fecha: '2021-02-02', categoria: 'servicios' },
      ],
    };
  },
};
</script>

<style></style>
