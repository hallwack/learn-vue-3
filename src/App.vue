<template>
  <div id="app">
    <input type="text" :value="currentHashtag" @input="setHashtag" />
    <card v-for="post in filteredPosts" :key="post">
      <template v-slot:title>
        {{ post.title }}
      </template>
      <template v-slot:content>
        {{ post.content }}
      </template>
      <template v-slot:desc>
        <controls :post="post" />
      </template>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </card>
    {{ currentHashtag }}
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { store } from "./microblog/store";
import Card from "./pokemon/Card.vue";
import Controls from "./microblog/Controls.vue";
import { computed } from "vue";

export default {
  components: {
    Card,
    Controls,
  },
  setup() {
    const setHashtag = (evt) => {
      store.setHashtag(evt.target.value);
    };
    return {
      filteredPosts: store.filteredPosts,
      currentHashtag: computed(() => store.state.currentHashtag),
      setHashtag,
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
