<template>
  <div>
    <h1 class="title">
      Posts Page
    </h1>
    <div v-for="post in 5">
      <a href="#">Post: {{ post }}</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
