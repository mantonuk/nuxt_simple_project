<template>
  <div>
    <nuxt-link
      class="btn btn-secondary btn-sm"
      :to="'/users/' + user_id + '/albums'"
      >Albums</nuxt-link
    >
    <nuxt-link
      class="btn btn-secondary btn-sm"
      :to="'/users/' + user_id + '/todos'"
      >Todos</nuxt-link
    >
    <nuxt-link
      class="btn btn-secondary btn-sm"
      :to="'/users/' + user_id + '/posts'"
      >Posts</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: "ProfileButtonsComponent",
  props: ["user_id"]
};
</script>

<style scoped></style>
