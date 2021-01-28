<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Posts of current User
    </h1>
    <div v-for="post in posts" :key="post.id">
      <a href="#" @click.prevent="openPost(post)">{{ post.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    if (store.getters["posts/posts"].length === 0) {
      await store.dispatch("posts/fetch", { user_id: params.id });
    }
  },
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    }
  },
  methods: {
    openPost(post) {
      this.$router.push(`/posts/show/${post.id}`);
    }
  }
};
</script>

<style></style>
