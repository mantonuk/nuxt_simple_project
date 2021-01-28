<template>
  <div>
    <h1>User info</h1>
    <div>
      <h2 class="title">Name: {{ user.name }}</h2>
      <hr />
      <h4 class="title">Email: {{ user.email }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    return { user };
  }
};
</script>

<style></style>
