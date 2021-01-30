<template>
  <PostsGridComponent title="Posts" :data="posts" />
</template>

<script>
import PostsGridComponent from "@/components/Posts";
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
