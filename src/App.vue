<template>
  <div id="app">
    <h2>Hello and welcome to Vue Router</h2>
    <router-link to="/hello"> Hello </router-link>
    <router-link to="/posts"> Posts </router-link>
    <div>
      <router-view />
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {};
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
