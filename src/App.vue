<template>
  <div id="app">
    <p>Hello, {{ msg }}!</p>
    <button @click="increment()">Click Me!</button>
    <p>Increment : {{ count }}</p>

    <!-- <div v-if="isEven(count)">Even</div>
    <div v-else>Odd</div> -->

    <!-- <div :title="number"> -->
    <number
      v-for="number in numbers"
      :key="number"
      :number="number"
      @chosen="putInArray"
    />
    <h3>Clicked Numbers</h3>
    <number v-for="number in clickedNumbers" :key="number" :number="number" />

    <!-- </div> -->

    <input @input="input" />
    <div v-if="error">{{ error }}</div>

    <!-- v-model -->
    <div>
      <h2>V - Model</h2>
      <input type="checkbox" v-model="check" value="a" />
      <input type="checkbox" v-model="check" value="b" />
      <input type="checkbox" v-model="check" value="c" /> {{ check }}
    </div>
    <!-- <div v-for="number in isEvenList" :key="number">{{ number }}</div> -->

    <Hello />
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Hello from "./components/Hello.vue";
import Number from "./components/Number.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "Raihan Adam",
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      value: "",
      error: "",
      check: ["a"],
      clickedNumbers: [],
    };
  },
  computed: {
    // isEvenList() {
    //   return this.numbers.filter((num) => {
    //     return this.isEven(num);
    //   });
    // },
  },
  methods: {
    increment() {
      this.count += 1;
    },
    input($event) {
      this.value = $event.target.value;
      if (this.value.length < 5) {
        this.error = "Too short";
      } else {
        this.error = "";
      }
    },
    putInArray(payload) {
      console.log("works", payload.number);
      this.clickedNumbers.push(payload.number);
    },
  },
  components: {
    // HelloWorld
    Hello,
    Number,
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

.red {
  color: red;
}

.blue {
  color: blue;
}
</style>
