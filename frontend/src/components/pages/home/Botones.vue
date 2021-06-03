<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6" md="6" class="d-flex justify-center">
        <v-btn outlined color="pink accent-2" to="/calendario">
          <v-icon left>
            mdi-calendar
          </v-icon>
          ver calendario
        </v-btn>
      </v-col>
      <v-col cols="6" md="6" class="d-flex justify-center">
        <v-btn flat color="primary" to="/gastos">
          <v-icon>
            mdi-currency-usd
          </v-icon>
          ver gastos
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'BotonesHome'
};
</script>

<style></style>
