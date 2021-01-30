export const state = () => ({
  token: null,
  currentUser: null,
  data: {}
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setCurrentUser(state, user) {
    state.currentUser = user;
  },
  clearToken(state) {
    state.token = null;
  },
  clearCurrentUser(state) {
    state.currentUser = null;
  },
  setData(state, {key, data}) {
    state.data[key] = data;
  }
};

export const actions = {
  login({ commit }, { user }) {
    commit("setToken", "someTokenHere");
    commit("setCurrentUser", user);
  },
  logout({ commit }) {
    commit("clearToken");
    commit("clearCurrentUser");
  }
};

export const getters = {
  hasToken: state => !!state.token,
  currentUser: state => state.currentUser
};
