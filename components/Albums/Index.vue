<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      {{ title }}
    </h1>
    <div v-for="album in data">
      <nuxt-link :to="'/albums/' + album.id" no-prefetch>{{
        album.title
      }}</nuxt-link>

      <EntityActions
        :entity="album"
        @update="update(album)"
        @destroy="destroy(album)"
        v-if="isAuthor"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumsGridComponent",
  props: ["title", "data", "isAuthor"],
  methods: {
    open(album) {
      this.$router.push(`/albums/${album.id}`);
    },
    async update(album) {
      this.loading = true;

      const { body, title } = await this.$axios.$put(
        `https://jsonplaceholder.typicode.com/albums/${album.id}/`,
        {
          ...album,
          ...{ title: album.title + " - " + Date.now() }
        }
      );

      this.$emit("update", {
        ...album,
        ...{ body, title }
      });
      this.loading = false;
    },
    async destroy(album) {
      this.loading = true;
      await this.$axios.$delete(
        `https://jsonplaceholder.typicode.com/albums/${album.id}/`
      );
      this.$emit("destroy", album);
      this.loading = false;
    }
  }
};
</script>
