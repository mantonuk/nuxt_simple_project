<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Todos
    </h1>
    <div class="position-relative" v-if="isAuthor">
      <div
        class="d-flex w-100 h-100 position-absolute justify-content-center align-items-center"
        v-if="loading_add"
        style="z-index:1;"
      >
        <LoaderDots />
      </div>
      <div class="input-group mb-3" :class="{ 'd-opacity': loading_add }">
        <input
          type="text"
          class="form-control"
          placeholder="Type new todo"
          aria-label="Type new todo"
          aria-describedby="basic-addon2"
          @keyup.enter="add"
          v-model="new_todo"
        />
        <div class="input-group-append">
          <button
            @click.prevent="add"
            class="btn btn-outline-secondary"
            type="button"
          >
            Save
          </button>
        </div>
      </div>
    </div>
    <div
      v-for="todo in todos"
      :key="todo.id"
      :class="{ 'd-opacity': loading_update }"
    >
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
export default {
  data: () => ({
    loading_add: false,
    loading_update: false,
    todos: [],
    new_todo: ""
  }),
  validate({ params }) {
    return /^\d+$/.test(params.user_id);
  },
  async fetch() {
    const { user_id } = this.$route.params;
    this.todos = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users/" + user_id + "/todos/"
    );
  },
  methods: {
    async toggle(todo) {
      if (!this.isAuthor) {
        return;
      }
      this.loading_update = true;
      try {
        const data = await this.$axios.$put(
          "https://jsonplaceholder.typicode.com/todos/" + todo.id,
          todo
        );
        todo.completed = !todo.completed;
      } catch (error) {
        alert(error);
      }
      this.loading_update = false;
    },
    async add() {
      if (!this.isAuthor) {
        return;
      }
      this.loading_add = true;
      const { user_id } = this.$route.params;
      try {
        const todo = await this.$axios.$post(
          "https://jsonplaceholder.typicode.com/todos/",
          {
            title: this.new_todo,
            userId: user_id,
            completed: false
          }
        );
        this.todos.unshift(todo);
        this.new_todo = "";
      } catch (error) {
        alert(error);
      }
      this.loading_add = false;
    }
  },
  computed: {
    isAuthor() {
      const user = this.$store.getters["currentUser"];
      if (user && this.$route.params.user_id) {
        return user.id === parseInt(this.$route.params.user_id);
      }
      return false;
    }
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
.d-opacity {
  opacity: 0.2;
}
</style>
