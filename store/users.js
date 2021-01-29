export const state = () => ({
  users: []
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};

export const actions = {
  async fetch({ commit }, { callback = false }) {
    const users = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("setUsers", users);
    if (callback) {
      callback();
    }
  }
};

export const getters = {
  users: state => state.users
};
