<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Todos of current User
    </h1>
    <div v-for="todo in todos" :key="todo.id">
      <a href="#" @click.prevent="toggle(todo)">{{ todo.title }}</a>
      <span>Done: {{ todo.completed }}</span>
    </div>
  </div>
</template>

<script>
export default {
  async fetch({ store, params }) {
    if (store.getters["todos/todos"].length === 0) {
      await store.dispatch("todos/fetch", { user_id: params.id });
    }
  },
  computed: {
    todos() {
      return this.$store.getters["todos/todos"];
    }
  },
  methods: {
    toggle(todo) {
      todo.completed = !todo.completed;
    }
  }
};
</script>

<style></style>
