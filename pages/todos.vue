<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      Todos Page
    </h1>
    <div v-for="todo in 5">
      <a href="#">Todo: {{ todo }}</a>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth"]
};
</script>

<style></style>
