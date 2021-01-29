<template>
  <div>
    <div class="container mt-4">
      <div class="bg-light rounded p-4 text-center">
        <h1 class="title">
          Login Page
        </h1>
        <p>
          <small
            >Dummy login page. It means that click on button just set token to
            true</small
          >
        </p>
        <LoaderDots v-if="loading" />
        <form @submit.prevent="loginUser" v-else>
          <div class="form-group">
            <p>
              <select v-model="selected">
                <option v-for="user in users" v-bind:value="user.id">
                  ID: [{{ user.id }}] {{ user.name }}, {{ user.email }}
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
import LoaderDots from "@/components/LoaderDots";

export default {
  layout: "empty",
  components: {
    LoaderDots
  },
  data: () => ({
    selected: null,
    loading: true
  }),
  computed: {
    users() {
      return this.$store.getters["users/users"];
    }
  },
  methods: {
    loginUser() {
      const user = this.users.find(user => user.id === this.selected);
      this.$store.dispatch("login", { user });
      this.$router.push("/users/profile");
    }
  },
  mounted() {
    //emulate waiting
    setTimeout(() => {
      this.$store.dispatch("users/fetch", {
        callback: () => {
          this.loading = false;
        }
      });
    }, 1000);
  }
};
</script>

<style></style>
