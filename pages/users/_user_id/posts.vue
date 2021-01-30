<template>
  <PostsGridComponent
    title="Posts"
    :data="posts"
    :isAuthor="isAuthor"
    @destroy="destroyPost"
    @update="updatePost"
  />
</template>

<script>
export default {
  components: {
    PostsGridComponent
  },
  data: () => ({
    posts: []
  }),
  validate({ params }) {
    return /^\d+$/.test(params.user_id);
  },
  async fetch() {
    const { user_id } = this.$route.params;
    this.posts = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users/" + user_id + "/posts/"
    );
  },
  computed: {
    isAuthor() {
      const user = this.$store.getters["currentUser"];
      if (user && this.$route.params.user_id) {
        return user.id === parseInt(this.$route.params.user_id);
      }
      return false;
    }
  },
  methods: {
    getElementIndex(post) {
      return this.posts.findIndex(item => item.id === post.id);
    },
    destroyPost(post) {
      const index = this.getElementIndex(post);

      if (index !== -1) {
        this.posts.splice(index, 1);
      }
    },
    updatePost(post) {
      const index = this.getElementIndex(post);

      if (index !== -1) {
        this.posts.splice(index, 1, post);
      }
    }
  }
};
</script>

<style></style>
