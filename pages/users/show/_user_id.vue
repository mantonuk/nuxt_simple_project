<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <div class="position-relative">
      <div class="position-absolute d-inline top-0" style="right:0;">
        <nuxt-link
          class="btn btn-primary btn-sm"
          to="/users/profile"
          v-if="isCurrent"
          >Your Profile</nuxt-link
        >
      </div>
      <h2 class="title">Name: {{ user.name }}</h2>
      <p>
        <small>Email: {{ user.email }}</small>
      </p>
      <hr />
      <ProfileButtonsComponent :user_id="user.id" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ProfileButtonsComponent
  },
  validate({ params }) {
    return /^\d+$/.test(params.user_id);
  },
  data: () => ({
    user: {}
  }),
  computed: {
    isCurrent() {
      const user = this.$store.getters["currentUser"];
      if (user && this.user.id) {
        return user.id === parseInt(this.$route.params.user_id);
      }
      return false;
    }
  },
  async fetch() {
    const { user_id } = this.$route.params;
    this.user = await this.$axios.$get(
      `https://jsonplaceholder.typicode.com/users/${user_id}`
    );
  }
};
</script>

<style></style>
