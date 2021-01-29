<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <div>
      <p class="mb-1"><small>Album:</small></p>
      <h2 class="title">{{ album.title }}</h2>
      <hr />
      <p class="mb-1"><small>Photos:</small></p>
      <div class="d-flex flex-wrap">
        <div v-for="photo in photos" :key="photo.id">
          <img :src="photo.thumbnailUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.album_id);
  },
  async asyncData({ $axios, params }) {
    const album = await $axios.$get(
      `https://jsonplaceholder.typicode.com/albums/${params.album_id}`
    );
    const photos = await $axios.$get(
      `https://jsonplaceholder.typicode.com/albums/${params.album_id}/photos/`
    );
    return { album, photos };
  }
};
</script>

<style></style>
