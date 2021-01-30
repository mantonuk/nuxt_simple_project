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
  name: "AlbumViewComponent",
  props: ['album', 'photos'],
};
</script>

<style></style>
