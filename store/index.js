export const state = () => ({
  token: null,
  currentUserId: null
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  setCurrentUserId(state, user_id) {
    state.currentUserId = user_id;
  },
  clearToken(state) {
    state.token = null;
  },
  clearCurrentUserId(state) {
    state.currentUserId = null;
  }
};

export const actions = {
  login({ commit }, { user_id }) {
    console.log("action.login");
    commit("setToken", "someTokenHere");
    commit("setCurrentUserId", user_id);
  },
  logout({ commit }) {
    console.log("action.logout");
    commit("clearToken");
    commit("clearCurrentUserId");
  }
};

export const getters = {
  hasToken: state => !!state.token,
  currentUserId: state => state.currentUserId
};
