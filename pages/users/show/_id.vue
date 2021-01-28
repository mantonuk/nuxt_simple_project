<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <div>
      <h2 class="title">Name: {{ user.name }}</h2>
      <hr />
      <h4 class="title">Email: {{ user.email }}</h4>
      <hr />
      <div>
        <nuxt-link :to="'/users/' + user.id + '/albums'" no-prefetch
          >Albums</nuxt-link
        >
        <nuxt-link :to="'/users/' + user.id + '/todos'" no-prefetch
          >Todos</nuxt-link
        >
        <nuxt-link :to="'/users/' + user.id + '/posts'" no-prefetch
          >Posts</nuxt-link
        >
      </div>
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
