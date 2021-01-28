<template>
  <div>
    <div class="container mt-4">
      <div class="bg-light rounded p-4 text-center">
        <h1 class="title">
          Login Page
        </h1>
        <form @submit.prevent="loginUser">
          <div class="form-group">
            <p><small>Dummy login page. It means that click on button just set token to true</small></p>
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
  methods: {
    loginUser() {
      this.$store.dispatch("login");
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
