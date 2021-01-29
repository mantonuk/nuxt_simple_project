<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Albums of current User
    </h1>
    <div v-for="album in albums" :key="album.id">
      <a href="#" @click.prevent="openAlbum(album)">{{ album.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    if (store.getters["albums/albums"].length === 0) {
      await store.dispatch("albums/fetch", { user_id: params.user_id });
    }
  },
  computed: {
    albums() {
      return this.$store.getters["albums/albums"];
    }
  },
  methods: {
    openAlbum(album) {
      this.$router.push(`/albums/${album.id}`);
    }
  }
};
</script>

<style></style>
