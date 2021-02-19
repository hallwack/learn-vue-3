<template>
  <div id="app">
    <form @submit.prevent="submit" action="" class="form">
      <my-input
        name="Username"
        :rules="{ required: true, min: 5 }"
        :value="username.value"
        @update="update"
        type="text"
      />
      <my-input
        name="Password"
        :rules="{ required: true, min: 10 }"
        :value="password.value"
        @update="update"
        type="password"
      />
      <my-button
        color="white"
        background="darkslateblue"
        :disabled="!validation"
      />
    </form>
  </div>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyButton from "./components/MyButton.vue";
import MyInput from "./components/MyInput.vue";

export default {
  components: {
    MyButton,
    MyInput,
  },
  data() {
    return {
      valid: true,
      username: {
        value: "user",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
    };
  },
  computed: {
    validation() {
      return this.username.valid && this.password.valid;
    },
  },
  methods: {
    submit() {
      console.log("Submit");
    },
    update(payload) {
      console.log(payload);
      this[payload.name.toLowerCase()] = {
        value: payload.value,
        valid: payload.valid,
      };
    },
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

.form {
  max-width: 400px;
  width: 50%;
}
</style>
