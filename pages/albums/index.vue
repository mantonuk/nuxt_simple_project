<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Albums Page
    </h1>
    <div class="p-2 mt-2 mb-2 bg-info rounded text-white">
      Data from axios were prerendered on server side
    </div>
    <div v-for="album in albums">
      <nuxt-link
        :to="'/albums/' + album.id"
        no-prefetch
        >{{ album.title }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
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
