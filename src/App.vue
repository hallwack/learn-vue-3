<template>
  <div id="app">
    <div>Hello, Vuex!</div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>

    <button
      v-for="post in posts"
      :key="post.id"
      @click="fetchPostData(post.id)"
    >
      {{ post.title }}
    </button>
    <br />
    <div>Current Post Id: {{ currentPostId }}</div>

    <div v-if="currentPost">
      <h1>{{ currentPost.title }}</h1>
      <p>{{ currentPost.content }}</p>
    </div>
    <div>Current Post: {{ currentPost }}</div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Post 1",
        },
        {
          id: 2,
          title: "Post 2",
        },
        {
          id: 3,
          title: "Post 3",
        },
      ],
    };
  },
  computed: {
    count() {
      return this.$store.state.allPosts.count;
    },
    currentPostId() {
      return this.$store.state.allPosts.currentPostId;
    },
    currentPost() {
      console.log(this.$store.state.allPosts.currentPost);
      return this.$store.state.allPosts.currentPost;
    },
  },
  methods: {
    increment() {
      this.$store.commit("allPosts/increment", {
        number: Math.random(),
      });
    },
    fetchPostData(id) {
      // * for mutation
      this.$store.commit("allPosts/setPostId", id);
      console.log(id);

      // * for action
      this.$store.dispatch("allPosts/fetchDataFromServer", id);
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
</style>
