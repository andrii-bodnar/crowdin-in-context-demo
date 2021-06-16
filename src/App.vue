<template>
  <div id="app">
    <img alt="Crowdin In-Context" src="./assets/in-context.png">
    <HelloWorld/>
    <locale-switcher/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import LocaleSwitcher from "./components/LocaleSwitcher"

export default {
  name: 'App',
  components: {
    LocaleSwitcher,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
