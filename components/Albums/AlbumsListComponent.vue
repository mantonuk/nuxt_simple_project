<template>
  <div
    class="bg-light p-4 rounded mt-4 border border-secondary position-relative"
  >
    <div
      class="d-flex w-100 h-100 position-absolute justify-content-center align-items-center"
      v-if="loading"
      style="z-index:1;"
    >
      <LoaderDotsComponent />
    </div>
    <div class="p-4" :class="{ 'd-opacity': loading }">
      <h1 class="title">
        {{ title }}
      </h1>
      <div v-for="album in data">
        <nuxt-link :to="'/albums/' + album.id" no-prefetch>{{
          album.title
        }}</nuxt-link>

        <EntityActionsComponent
          :entity="album"
          @update="update(album)"
          @destroy="destroy(album)"
          v-if="isAuthor"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LoaderDotsComponent from "@/components/LoaderDotsComponent";
import EntityActionsComponent from "@/components/EntityActionsComponent";
export default {
  name: "AlbumsListComponent",
  components: {
    LoaderDotsComponent,
    EntityActionsComponent
  },
  props: ["title", "data", "isAuthor"],
  data: () => ({
    loading: false
  }),
  methods: {
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

<style scoped>
.d-opacity {
  opacity: 0.3;
}
</style>
