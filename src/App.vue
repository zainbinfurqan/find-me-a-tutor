<template>
  <router-view></router-view>
</template>

<script>
import helpers from "./utils/helpers";
export default {
  name: "App",

  beforeCreate() {
    helpers.isAuthrized("", this.$router);
    // this.isLoginFlag = helpers.isLogin();
    this.$store.commit("initiaStore");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  height: 100vh;
}
</style>
