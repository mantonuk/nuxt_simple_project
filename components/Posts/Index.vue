<template>
  <div class="bg-light rounded mt-4 border border-secondary position-relative">
    <div
      class="d-flex w-100 h-100 position-absolute justify-content-center align-items-center"
      v-if="loading"
      style="z-index:1;"
    >
      <LoaderDots />
    </div>
    <div class="p-4" :class="{ 'd-opacity': loading }">
      <h1 class="title">
        {{ title }}
      </h1>
      <div v-for="post in data">
        <a :href="'posts/' + post.id" @click.prevent="open(post)">{{
          post.title
        }}</a>
        <EntityActions
          :entity="post"
          @update="update(post)"
          @destroy="destroy(post)"
          v-if="isAuthor"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "PostsGridComponent",
  /*components: {*/
    /*LoaderDots,*/
    /*EntityActions*/
  /*},*/
  props: ["title", "data", "isAuthor"],
  data: () => ({
    loading: false
  }),
  methods: {
    open(post) {
      this.$router.push(`/posts/${post.id}`);
    },
    async update(post) {
      this.loading = true;

      const { body, title } = await this.$axios.$put(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/`,
        {
          ...post,
          ...{ title: post.title + " - " + Date.now() }
        }
      );

      this.$emit("update", {
        ...post,
        ...{ body, title }
      });
      this.loading = false;
    },
    async destroy(post) {
      this.loading = true;
      await this.$axios.$delete(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/`
      );
      this.$emit("destroy", post);
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
