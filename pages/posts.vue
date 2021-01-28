<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Posts Page
    </h1>
    <div class="p-2 mt-2 mb-2 bg-info rounded text-white">
      Data have been server-rendered
    </div>
    <div v-for="post in posts">
      <a href="#" @click.prevent="openPost(post)">{{ post.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["posts/posts"].length === 0) {
      await store.dispatch("posts/fetch");
    }
  },
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    }
  },
  methods: {
    openPost(post) {
      this.$router.push(`/posts/${post.id}`);
    }
  }
};
</script>

<style></style>
