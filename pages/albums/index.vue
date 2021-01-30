<template>
  <AlbumsListComponent title="Albums Page" :data="albums" />
</template>

<script>

import AlbumsListComponent from "@/components/Albums/AlbumsListComponent";

export default {
  components: {
    AlbumsListComponent
  },
  data: () => ({
    albums: []
  }),
  async fetch() {
    this.albums = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/albums"
    );
  }
};
</script>

<style></style>
