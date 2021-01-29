<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Photos:
    </h1>
    <div v-for="photo in photos" :key="photo.id">
      <a href="#" @click.prevent="openAlbum(photo)">{{ photo.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    if (store.getters["photos/photos"].length === 0) {
      await store.dispatch("photos/fetch", { user_id: params.user_id });
    }
  },
  computed: {
    photos() {
      return this.$store.getters["photos/photos"];
    }
  },
};
</script>

<style></style>

