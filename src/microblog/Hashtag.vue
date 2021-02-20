<template>
  <div>
    <div class="hashtag" @click="setHashtag">#{{ hashtag }}</div>
  </div>
</template>

<script>
import { store } from "./store";
export default {
  props: {
    hashtag: {
      type: String,
    },
  },
  setup(props) {
    const setHashtag = () => {
      store.setHashtag(props.hashtag);
    };
    return {
      setHashtag,
    };
  },
};
</script>

<style scoped>
.hashtag {
  text-decoration: underline;
  transition: 0.2s;
}

.hashtag:hover {
  color: cornflowerblue;
  transition: 0.2s;
}
</style>