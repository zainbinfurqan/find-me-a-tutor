<template>
  <div class="container-fluid m-0 p-0 h-100">
    <NavBar />
    <div class="d-flex p-2 flex-column">
      <div class="d-flex justify-content-center p-5">
        <div class="d-flex flex-grow-1">
          <form class="mr-2 my-auto w-100 d-inline-block order-1">
            <div class="input-group">
              <input type="text" class="form-control border border-right-0" placeholder="Search..." />
              <span class="input-group-append">
                <button class="btn border border-left-0" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/Navbar";

export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
</style>