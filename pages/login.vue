<template>
  <div>
    <div class="container mt-4" style="max-width:400px;">
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
        <LoaderDotsComponent v-if="loading" />
        <form @submit.prevent="loginUser" v-else>
          <div class="form-group">
            <div class="input-group mb-3">
              <select class="custom-select" v-model="selected">
                <option selected value="">Choose...</option>
                <option v-for="user in users" v-bind:value="user.id">
                  ID: [{{ user.id }}] {{ user.name }}, {{ user.email }}
                </option>
              </select>
            </div>
            <button class="btn btn-primary" :class="{'btn-secondary disabled': !selected}">Login</button>
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
import LoaderDotsComponent from '@/components/LoaderDotsComponent';
export default {
  layout: "empty",
  components: {
   LoaderDotsComponent 
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
      if (user) {
        this.$store.dispatch("login", { user });
        this.$router.push("/users/profile");
      } else {
        console.log("Wrong User");
      }
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
