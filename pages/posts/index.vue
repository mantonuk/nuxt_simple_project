<template>
  <PostsListComponent title="Posts" :data="posts" />
</template>

<script>

import PostsListComponent from "@/components/Posts/PostsListComponent";

export default {
  components: {
   PostsListComponent 
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
