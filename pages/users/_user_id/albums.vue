<template>
  <AlbumsGridComponent
    title="Albums"
    :data="albums"
    :isAuthor="isAuthor"
    @destroy="destroyAlbum"
    @update="updateAlbum"
  />
</template>

<script>

export default {
  data: () => ({
    albums: []
  }),
  validate({ params }) {
    return /^\d+$/.test(params.user_id);
  },
  components: {
    AlbumsGridComponent
  },
  async fetch() {
    const { user_id } = this.$route.params;
    this.albums = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users/" + user_id + "/albums/"
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
    getElementIndex(album) {
      return this.albums.findIndex(item => item.id === album.id);
    },
    destroyAlbum(album) {
      const index = this.getElementIndex(album);

      if (index !== -1) {
        this.albums.splice(index, 1);
      }
    },
    updateAlbum(album) {
      const index = this.getElementIndex(album);

      if (index !== -1) {
        this.albums.splice(index, 1, album);
      }
    }
  }
};
</script>
