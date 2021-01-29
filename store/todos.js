export const state = () => ({
  todos: []
});

export const mutations = {
  setTodos(state, todos) {
    state.todos = todos;
  },
  toggle(state, todo) {
    todo.completed = !todo.completed;
  }
};

export const actions = {
  async fetch({ commit }) {
    const todos = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", todos);
  }
};

export const getters = {
  todos: state => state.todos
};
