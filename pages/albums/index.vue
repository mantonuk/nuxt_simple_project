<template>
  <AlbumsGridComponent title="Albums Page" :data="albums" />
</template>

<script>
export default {
  components: {
    AlbumsGridComponent
  },
  data: () => ({
    albums : []
  }),
  async fetch() {
    this.albums = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/albums"
    );
  }
};
</script>

<style></style>
