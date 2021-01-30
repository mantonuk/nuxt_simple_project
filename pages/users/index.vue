<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Users
    </h1>
    <div v-for="user in users" :key="user.id">
      <a href="#" @click.prevent="open(user)">{{ user.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    users: []
  }),
  async fetch() {
    this.users = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users"
    );
  },
  methods: {
    open(user) {
      this.$router.push(`/users/show/${user.id}`);
    }
  }
};
</script>

<style></style>
