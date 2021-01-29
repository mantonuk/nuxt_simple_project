<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Posts of current User
    </h1>
    <div v-for="post in posts" :key="post.id">
      <a href="#" @click.prevent="openPost(post)">{{ post.title }}</a>
      <span v-if="isAuthor">
        <a class="btn btn-primary btn-sm" @click.prevent="editPost(post)"
          >edit</a
        >
        <a class="btn btn-danger btn-sm" @click.prevent="deletePost(post)"
          >delete</a
        >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  async fetch({ store, params }) {
    if (store.getters["posts/posts"].length === 0) {
      await store.dispatch("posts/fetch", { user_id: params.user_id });
    }
  },
  computed: {
    posts() {
      return this.$store.getters["posts/posts"];
    },
    isAuthor() {
      const user = this.$store.getters["currentUser"];
      if (user && this.$route.params.user_id) {
        return user.id === parseInt(this.$route.params.user_id);
      } else {
        return false;
      }
    }
  },
  methods: {
    openPost(post) {
      this.$router.push(`/posts/show/${post.id}`);
    },
    editPost(post) {
      console.log("editPost");
    },
    deletePost(post) {
      console.log("deletePost");
    }
  }
};
</script>

<style></style>
