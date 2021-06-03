<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" md="6">
        <v-card outlined>
          <v-card-title class="text-h5">Presupuesto</v-card-title>
          <v-card-text class="px-8">
            <v-text-field
              v-model.number="presupuesto"
              label="Presupuesto mensual"
              prefix="Q."
              outlined
              :readonly="!edit"
              :append-icon="edit ? 'mdi-content-save' : 'mdi-pencil'"
              @click:append="modificar"
            />
            <v-text-field v-model="disponible" label="Disponible" prefix="Q." outlined readonly />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      presupuesto: 100,
      totalGastos: 10,
      edit: false,
    };
  },
  computed: {
    disponible() {
      return this.presupuesto - this.totalGastos;
    },
  },
  methods: {
    modificar() {
      try {
        if (this.edit) {
          // update http
          this.edit = !this.edit;
        } else {
          this.edit = !this.edit;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
