<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <div>
      <h2 class="title">{{ post.title }}</h2>
      <hr />
      <div>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    return { post };
  }
};
</script>

<style></style>
