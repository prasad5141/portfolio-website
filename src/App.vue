<template>
  <HeaderBar />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderBar from "./components/HeaderBar.vue";

export default {
  name: "App",
  components: {
    HeaderBar,
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
  margin-top: -22px;
  margin-left: -8px;
  margin-right: -8px;
}
</style>
