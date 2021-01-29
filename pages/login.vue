<template>
  <div>
    <div class="container mt-4">
      <div class="bg-light rounded p-4 text-center">
        <h1 class="title">
          Login Page
        </h1>
        <form @submit.prevent="loginUser">
          <div class="form-group">
            <p>
              <small
                >Dummy login page. It means that click on button just set token
                to true</small
              >
            </p>
            <p>
            <select v-model="selected">
              <option v-for="user in users" v-bind:value="user.id">
                {{ user.email }}
              </option>
            </select>
            </p>

            <button class="btn btn-primary">Login</button>
          </div>
        </form>
        <div class="mt-2">
          <nuxt-link to="/">back Home</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "empty",
  data: () => ({
    selected: null,
  }),
  computed: {
    users() {
      return this.$store.getters["users/users"];
    }
  },
  methods: {
    loginUser() {
      this.$store.dispatch("login", {user_id: this.selected});
      this.$router.push("/");
    }
  },
  mounted() {
    this.$store.dispatch("users/fetch");
  }
};
</script>

<style></style>
