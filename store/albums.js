export const state = () => ({
  albums: []
});

export const mutations = {
  setAlbums(state, albums) {
    state.albums = albums;
  }
};

export const actions = {
  async fetch({ commit }, { user_id = false }) {
    console.log("albums/fetch");
    console.log(user_id);
    if (user_id) {
      const albums = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/users/" + user_id + "/albums"
      );
      commit("setAlbums", albums);
    } else {
      const albums = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      commit("setAlbums", albums);
    }
  }
};

export const getters = {
  albums: state => state.albums
};
