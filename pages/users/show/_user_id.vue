<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <div class="position-relative">
      <div class="position-absolute d-inline top-0" style="right:0;">
        <nuxt-link class="btn btn-primary btn-sm" to="/users/profile" no-prefetch
          >Your Profile</nuxt-link
        >
      </div>
      <h2 class="title">Name: {{ user.name }}</h2>
      <p><small>Email: {{ user.email }}</small></p>
      <hr />
      <div>
        <nuxt-link class="btn btn-secondary btn-sm" :to="'/users/' + user.id + '/albums'" no-prefetch
          >Albums</nuxt-link
        >
        <nuxt-link class="btn btn-secondary btn-sm" :to="'/users/' + user.id + '/todos'" no-prefetch
          >Todos</nuxt-link
        >
        <nuxt-link class="btn btn-secondary btn-sm" :to="'/users/' + user.id + '/posts'" no-prefetch
          >Posts</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.user_id);
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(
      `https://jsonplaceholder.typicode.com/users/${params.user_id}`
    );
    return { user };
  }
};
</script>

<style></style>
