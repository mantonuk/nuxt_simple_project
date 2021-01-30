<template>
  <div class="bg-light p-4 rounded mt-4 border border-secondary">
    <h1 class="title">
      User Profile
    </h1>
    <hr />
    <div>
      <div
        class="rounded p-2 mb-2 bg-primary text-white"
        :class="message.css"
        v-if="message.text"
      >
        {{ message.text }}
      </div>
      <div class="position-relative float-left w-75" :class="{ 'w-100': edit }">
        <div
          class="d-flex w-100 h-100 position-absolute justify-content-center align-items-center"
          v-if="loading"
          style="z-index:1;"
        >
          <LoaderDotsComponent />
        </div>
        <div v-if="edit" :class="{ 'edit-opacity': loading }">
          <div class="input-group mb-2">
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
          <div class="input-group mb-2">
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
          <div class="input-group mb-2">
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
          <div class="input-group d-flex justify-content-center">
            <div class="btn btn-primary mr-1" @click.prevent="updateUser">
              Save
            </div>
            <div class="btn btn-secondary ml-1" @click="edit = false">
              Cancel
            </div>
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
          <hr />
          <UserProfileButtonsComponent :user_id="user.id" />
        </div>
      </div>
      <div class="float-right w-25 pl-4 text-right" v-if="!edit">
        <a class="btn btn-primary" href="#" @click.prevent="edit = true"
          >Edit</a
        >
        <nuxt-link class="btn btn-secondary" :to="'/users/show/' + user.id"
          >View</nuxt-link
        >
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import LoaderDotsComponent from "@/components/LoaderDotsComponent";
import UserProfileButtonsComponent from "@/components/Users/UserProfileButtonsComponent";

export default {
  components: {
    LoaderDotsComponent,
    UserProfileButtonsComponent
  },
  middleware: ["auth"],
  data: () => ({
    edit: false,
    loading: false,
    message: {}
  }),
  computed: {
    user() {
      return this.$store.getters["currentUser"];
    },
    formData() {
      return { ...this.user };
    }
  },
  methods: {
    async updateUser() {
      this.loading = true;
      const user = await this.$axios.$put(
        `https://jsonplaceholder.typicode.com/users/${this.user.id}/`,
        {
          ...this.user,
          ...{
            email: this.formData.email,
            name: this.formData.name,
            username: this.formData.username
          }
        }
      );

      this.loading = false;
      if (user) {
        this.$store.commit("setCurrentUser", user);
        this.edit = false;
        this.message = {
          text: "Profile has been saved",
          css: "bg-success"
        };

        const users = [...this.$store.getters["users/users"]];
        const index = users.findIndex(item => item.id === user.id);

        if (index !== -1) {
          users.splice(index, 1, user);
          this.$store.commit("users/setUsers", users);
        }
      } else {
        this.message = {
          text: "Something went wrong",
          css: "bg-danger"
        };
      }

      setTimeout(() => {
        this.message = {};
      }, 5000);
    }
  }
};
</script>

<style scoped>
.input-group-prepend .input-group-text {
  min-width: 150px;
}
.edit-opacity {
  opacity: 0.2;
}
</style>
