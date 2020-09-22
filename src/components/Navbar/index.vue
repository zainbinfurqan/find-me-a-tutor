<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">We Teach</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="home" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="profile" class="nav-link m-0">Profile</router-link>
        </li>
        <li class="nav-item">
          <p class="nav-link m-0 logout-p" v-on:click="logout">Logout</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "NavBar",

  setup() {
    const store = useStore();
    const router = useRouter();
    function logout() {
      store.commit("logoutAction");
      router.replace("login");
    }
    return {
      logout,
    };
  },
};
</script>

<style scoped>
.logout-p {
  cursor: pointer;
}
</style>