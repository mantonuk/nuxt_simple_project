export const state = () => ({
  token: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  clearToken(state) {
    console.log("clearToken");
    state.token = null;
  }
};

export const actions = {
  login({ commit }) {
    console.log("action.login");
    commit("setToken", "someTokenHere");
  },
  logout({ commit }) {
    console.log("action.logout");
    commit("clearToken");
  }
};

export const getters = {
  hasToken: state => !!state.token
};
