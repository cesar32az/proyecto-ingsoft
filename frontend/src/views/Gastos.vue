<template>
  <v-container>
     <add-gastos/>
     <list-gastos/>
  </v-container>
</template>

<script>
import AddGastos from '../components/pages/gastos/AddGastos.vue'
import ListGastos from '../components/pages/gastos/ListGastos.vue'
export default {
  components: { AddGastos, ListGastos },

}
</script>

<style>

</style>