<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Hellonub />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Hellonub from './components/Hellonub.vue'

export default {
  name: 'App',
  components: {
    Hellonub
  }
}
</script>

<style>
body {
 background: rgb(2, 1, 61);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
