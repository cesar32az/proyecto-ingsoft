<template>
  <v-container fluid>
    <Header :menu="menu" :username="username" :admin="admin" />

    <v-main app>
      <router-view :data="data" :dark="dark"></router-view>
    </v-main>
    <Footer />
  </v-container>
</template>

<script>
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import VueJwtDecode from 'vue-jwt-decode';
export default {
  name: 'Main',
  components: { Header, Footer },

  data() {
    return {
      editar: false,
      user: [],
      menu: [],
      dark: null,
      drawer: false,
      group: false,
      data: {},
      username: '',
      admin: {},
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem('jwt');
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    },
    async getConfig() {
      try {
        let token = localStorage.getItem('jwt');
        this.user.token = token;
        let response = await this.$http.get('/api/users/me', {
          headers: { 'x-access-token': token },
        });
        this.menu = response.data.user.menus.map(value => {
          return value.menu;
        });
        this.dark = response.data.user.style[0].dark;
        this.data = response.data.user;
        this.data.rol = response.data.user.roles[0].name;
        this.username = response.data.user.username;
        this.admin = this.menu.find(element => element.name === 'Administrar');
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    this.getUserDetails();
    this.getConfig();
  },
  beforeUpdate() {
    this.$vuetify.theme.dark = this.dark;
  },
};
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
