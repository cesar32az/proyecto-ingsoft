<template>
  <v-container fluid>
    <Header />
    <v-main app>
      <router-view></router-view>
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
      } catch (e) {
        console.log(e);
      }
    },
  },
  created() {
    //this.getUserDetails();
    //this.getConfig();
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
