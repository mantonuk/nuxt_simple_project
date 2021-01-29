<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      User Profile
    </h1>
    <hr />
    {{ user }}
    <div>
      <div class="float-left w-75">
        <div v-if="edit">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="email">Email</span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Email"
              aria-describedby="email"
              v-model="formData.email"
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="name">Name</span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="name"
              aria-describedby="Name"
              v-model="formData.name"
            />
          </div>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="username">Username</span>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Username"
              aria-describedby="username"
              v-model="formData.username"
            />
          </div>
          <div class="input-group">
            <div class="btn btn-primary">Save</div>
            <div class="btn btn-secondary" @click="edit = false">Cancel</div>
          </div>
        </div>
        <div v-else>
          <p class="mb-1">
            <span class="font-weight-bold">Email:</span> {{ user.email }}
          </p>
          <p class="mb-1">
            <span class="font-weight-bold">Name:</span> {{ user.name }}
          </p>
          <p class="mb-1">
            <span class="font-weight-bold">username:</span> {{ user.username }}
          </p>
        </div>
      </div>
      <div class="float-right w-25 pl-4">
        <a href="#" @click.prevent="edit = true">Edit</a>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ["auth"],
  data: () => ({
    edit: false,
    loading: false
    /*formData: {}*/
  }),
  computed: {
    user() {
      return this.$store.getters["currentUser"];
    },
    formData() {
      return { ...this.user };
    }
  },
  methods: {}
};
</script>

<style></style>
