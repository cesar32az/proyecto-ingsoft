<template>
  <v-container>
    <!-- APP BAR -->
    <v-app-bar
      dark
      app
      color="#6A76AB"
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right,rgba(25,32,72,.7), rgba(100,115,201,.5)  "
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Proyecto Desarrollo Web </v-toolbar-title>
      <v-spacer></v-spacer
      ><v-toolbar-title>Usuario: {{ username }} </v-toolbar-title>
      <v-tooltip bottom color="primary">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon @click="logUserOut" v-bind="attrs" v-on="on">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Cerrar sesión</span>
      </v-tooltip>
      <v-menu bottom left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in menu" :key="i">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <!-- DRAWER -->
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item
            v-for="(item, i) in menu.filter(
              (item) => item.name !== 'Administrar'
            )"
            :key="i"
            link
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item>
          <v-list-group prepend-icon="mdi-calendar-check" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Tareas</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item link to="/calendario">
              <v-list-item-title>Calendario</v-list-item-title>
              <v-list-item-icon>
                <v-icon>mdi-calendar</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-list-item link to="/tablero">
              <v-list-item-title>Tablero</v-list-item-title>
              <v-list-item-icon>
                <v-icon>mdi-trello</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group prepend-icon="mdi-cog" no-action v-if="admin">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title> {{ admin.group }} </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(menu, i) in admin.sub"
              link
              :to="menu.link"
              :key="i"
            >
              <v-list-item-title>{{ menu.name }} </v-list-item-title>
              <v-list-item-icon
                ><v-icon>{{ menu.icon }} </v-icon></v-list-item-icon
              >
            </v-list-item>
          </v-list-group>
          <v-list-item link :to="{ name: 'Componentes' }">
            <v-list-item-icon>
              <v-icon>mdi-format-color-fill</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tema</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  props: {
    menu: Array,
    username: String,
    admin: Object,
  },
  data() {
    return {
      editar: false,
      drawer: false,
      group: false,
    };
  },

  methods: {
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>