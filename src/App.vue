<template>
  <div id="app">
    <div>
      <h5>Ref</h5>
      <button @click="increment">Click Me!</button>
      <p>{{ count }}</p>
    </div>
    <div>
      <h5>Reactive</h5>
      <button @click="increase('a')">Click Me!</button>
      <p>{{ numbers.a }}</p>
      <button @click="increase('b')">Click Me!</button>
      <p>{{ numbers.b }}</p>
    </div>
    <div>
      <h5>Before and After with Watch</h5>
      <button @click="a++">Click Me!</button>
      <p>{{ a }}</p>
      <button @click="b++">Click Me!</button>
      <p>{{ b }}</p>
      <div v-for="msg in history" :key="msg">
        {{ msg }}
      </div>
    </div>
    <div>
      <h4>Total = {{ total }}</h4>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { useNumber } from "./composition-api/numbers.js";

export default {
  setup() {
    const {
      increment,
      increase,
      count,
      numbers,
      total,
      a,
      b,
      history,
    } = useNumber();

    return {
      increment,
      increase,
      count,
      numbers,
      total,
      a,
      b,
      history,
    };
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
  margin-top: 60px;
}
</style>
