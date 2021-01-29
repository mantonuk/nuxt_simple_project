<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Albums Page
    </h1>
    <div class="p-2 mt-2 mb-2 bg-info rounded text-white">
      Data from axios were prerendered on server side
    </div>
    <div v-for="album in albums">
      <a :href="'albums/view/' + album.id" @click.prevent="openPost(album)">{{ album.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["albums/albums"].length === 0) {
      await store.dispatch("albums/fetch", {});
    }
  },
  computed: {
    albums() {
      return this.$store.getters["albums/albums"];
    }
  },
  methods: {
    openalbum(album) {
      this.$router.push(`/albums/view/${album.id}`);
    }
  }
};
</script>

<style></style>
