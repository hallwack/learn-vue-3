import { reactive, computed } from "vue";
import { posts } from "./posts";

class Store {
  constructor() {
    this.state = reactive({
      posts: posts,
      currentHashtag: null,
    });
  }

  get filteredPosts() {
    return computed(() => {
      if (!this.state.currentHashtag) {
        return this.state.posts;
      }
      return this.state.posts.filter((post) => {
        return post.hashtags.includes(this.state.currentHashtag);
      });
    });
  }

  setHashtag(tag) {
    this.state.currentHashtag = tag;
  }

  incrementLike(post) {
    const thePost = this.state.posts.find((x) => x.id === post.id);
    if (!thePost) {
      return;
    }
    thePost.likes += 1;
  }
}

export const store = new Store();
