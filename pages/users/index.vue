<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Users
    </h1>
    <div class="p-2 mt-2 mb-2 bg-info rounded text-white">
      User data have been server-rendered
    </div>

    <div v-for="user in users" :key="user.id">
      <a href="#" @click.prevent="openUser(user)">{{ user.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch("users/fetch");
    }
  },
  computed: {
    users() {
      return this.$store.getters["users/users"];
    }
  },
  methods: {
    openUser(user) {
      this.$router.push(`/users/${user.id}`);
    }
  }
};
</script>

<style></style>
