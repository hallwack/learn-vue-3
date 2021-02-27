<template>
  <img
    v-for="photo in currentAlbumPhotos"
    :key="photo.id"
    :src="photo.thumbnailUrl"
  />
</template>

<script>
export default {
  computed: {
    currentAlbumPhotos() {
      return this.$store.state.photos.currentAlbumPhotos;
    },
  },
};
</script>

<style scoped>
</style>