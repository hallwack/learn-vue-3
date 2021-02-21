<template>
  <div v-if="post">
    <h4>{{ post.title }}</h4>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
// import { computed } from "vue";
// import { useRoute } from "vue-router";
import { posts } from "../microblog/posts.js";
export default {
  // * Composition API
  // setup() {
  //   const route = useRoute();
  //   console.log(route.params);
  //   const post = computed(() => {
  //     return posts.find((x) => x.id === parseInt(route.params.id));
  //   });

  //   return { post };
  // },

  beforeRouteEnter(to, from, next) {
    console.log(to, from);
    next("/posts");
  },
  computed: {
    post() {
      // find params and filter the post
      return posts.find((x) => x.id === parseInt(this.$route.params.id));
    },
  },
};
</script>

<style>
</style>