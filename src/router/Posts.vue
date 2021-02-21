<template>
  <div>
    <h4>Posts</h4>
    <router-link v-for="post in posts" :key="post" :to="`/posts/${post.id}`">
      {{ post.title }}
    </router-link>
    <router-view />
  </div>
</template>

<script>
import { posts } from "../microblog/posts.js";
import { useRoute } from "vue-router";
import { watchEffect } from "vue";
export default {
  // watch: {
  //   $route: {
  //     handler: function (val) {
  //       console.log(val);
  //       this.fetchData(val.params.id);
  //     },
  //     immediate: true,
  //   },
  // },
  setup() {
    const route = useRoute();
    watchEffect(() => {
      console.log(route.params);
    });
    return {
      posts,
    };
  },
};
</script>

<style>
</style>