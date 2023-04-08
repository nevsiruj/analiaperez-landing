<template>
  <div id="app">
    <Header />

    <!-- Aquí va el contenido principal de la página -->
    <router-view />

    <!-- <Home /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Header,
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
