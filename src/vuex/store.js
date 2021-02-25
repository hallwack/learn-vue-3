import { createStore } from "vuex";
import { posts } from "../microblog/posts.js";

const delay = () =>
  new Promise((res) => {
    setTimeout(res, 1500);
  });

const allPosts = {
  namespaced: true,
  state() {
    return {
      count: 0,
      currentPostId: null,
      currentPost: null,
    };
  },
  mutations: {
    increment(state, payload) {
      state.count += payload.number;
    },
    setPostId(state, id) {
      state.currentPostId = id;
    },
    setPost(state, post) {
      state.currentPost = post;
    },
  },
  actions: {
    async fetchDataFromServer(ctx, id) {
      console.log(ctx);
      console.log(id);
      await delay();
      const post = posts.find((post) => {
        return post.id === id;
      });
      console.log(post);
      ctx.commit("setPostId", id);
      ctx.commit("setPost", post);
    },
  },
};

export const store = createStore({
  modules: {
    allPosts,
  },
});
