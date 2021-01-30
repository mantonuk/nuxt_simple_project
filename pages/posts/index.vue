<template>
  <PostsGridComponent title="Posts" :data="posts" />
</template>

<script>
export default {
  components: {
    PostsGridComponent
  },
  data: () => ({
    posts: []
  }),
  async fetch() {
    this.posts = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );
  }
};
</script>

<style></style>
