<template>
  <layouts>
    <template v-slot:header>Header</template>
    <template v-slot:sidebar>
      <album v-for="album in albums" :key="album.id" :album="album" />
      Sidebar</template
    >
    <template v-slot:content>
      <router-view />
    </template>
  </layouts>
</template>

<script>
import Album from "./Album.vue";
// import HelloWorld from './components/HelloWorld.vue'
import Layouts from "./Layouts.vue";
export default {
  components: {
    Layouts,
    Album,
  },
  async created() {
    this.$store.dispatch("albums/fetchAlbums");
  },
  watch: {
    $route: {
      handler(val) {
        this.fetchPhotosForAlbum(val.params.id);
        // console.log(val);
      },
      immediate: true,
    },
  },
  methods: {
    fetchPhotosForAlbum(albumId) {
      this.$store.dispatch("photos/fetchPhotosForAlbum", { id: albumId });
    },
  },
  computed: {
    albums() {
      return this.$store.state.albums.all;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}

#app body {
  margin: 0;
}
</style>
