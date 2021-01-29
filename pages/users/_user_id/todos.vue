<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Todos of current User
    </h1>
    <div v-for="todo in todos" :key="todo.id">
      <a
        href="#"
        class="text-secondary"
        @click.prevent="toggle(todo)"
        :class="{ 'done text-success': todo.completed }"
        >{{ todo.title }}</a
      >
      <span v-if="todo.completed" class="text-success font-weight-bold"
        >Done</span
      >
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  async fetch({ store, params }) {
    if (store.getters["todos/todos"].length === 0) {
      await store.dispatch("todos/fetch", { user_id: params.user_id });
    }
  },
  computed: {
    todos() {
      return this.$store.getters["todos/todos"];
    }
  },
  methods: {
    ...mapMutations({
      toggle: "todos/toggle"
    })
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
