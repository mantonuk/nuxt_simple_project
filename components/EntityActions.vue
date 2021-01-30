<template>
  <span>
    <a class="btn btn-primary btn-sm" @click.prevent="$emit('update', entity)">Save</a>
    <a class="btn btn-danger btn-sm" @click.prevent="$emit('destroy', entity)">Delete</a>
  </span>
</template>

<script>
export default {
  name: "EntityActions",
  props: ['entity']
};
</script>

<style scoped></style>
