<template>
  <AlbumViewComponent :album="album" :photos="photos" />
</template>

<script>
export default {
  components: {
    AlbumViewComponent
  },
  data: () => ({
    album: {},
    photos: []
  }),
  validate({ params }) {
    return /^\d+$/.test(params.album_id);
  },
  async fetch() {
    const { album_id } = this.$route.params;

    this.album = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/albums/${album_id}`
    );
    this.photos = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/albums/${album_id}/photos/`
    );
  }
};
</script>

<style></style>
