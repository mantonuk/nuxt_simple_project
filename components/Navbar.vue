<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Nuxt SSR</a>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link
            exact
            active-class="active"
            class="nav-link"
            to="/"
            no-prefetch
            >Home</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link
            active-class="active"
            class="nav-link"
            to="/about"
            no-prefetch
            >About</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link
            active-class="active"
            class="nav-link"
            to="/albums"
            no-prefetch
            >Albums</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link
            active-class="active"
            class="nav-link"
            to="/photos"
            no-prefetch
            >Photos</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link
            active-class="active"
            class="nav-link"
            to="/posts"
            no-prefetch
            >Posts</nuxt-link
          >
        </li>
        <li class="nav-item">
          <nuxt-link
            active-class="active"
            class="nav-link"
            to="/users"
            no-prefetch
            >Users</nuxt-link
          >
        </li>
      </ul>
    </div>
    <div>
      <ul class="navbar-nav mr-auto text-white">
        <li class="nav-item" v-if="!hasToken">
          <nuxt-link
            active-class="active"
            class="nav-link"
            to="/login"
            no-prefetch
            >Login</nuxt-link
          >
        </li>
        <li class="nav-item" v-else>
          <span class="pr-2">
          <nuxt-link
            active-class="active"
            class="text-white"
            to="/users/profile"
            no-prefetch
            ><u>Hi, {{ username }}</u></nuxt-link
          >
          </span> | 
          <a
            class="nav-link text-white d-inline"
            href="#"
            @click.prevent="logout()"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    hasToken() {
      return this.$store.getters.hasToken;
    },
    username() {
      return this.$store.getters.currentUser.name;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
};
</script>
