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
    <div id="cards_landscape_wrap-2">
      <div class="container">
        <div class="row">
          <div
            class="col-xs-12 col-sm-6 col-md-5 col-lg-3"
            v-bind:key="item.id"
            v-for="(item,index) in state.posts"
          >
            <Cards v-bind:item="item" v-bind:index="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/Navbar";
import Cards from "../../components/Cards";
import constant from "../../configuration/constants";
import { ref } from "vue";
import constants from "../../configuration/constants";

export default {
  name: "Home",
  components: {
    NavBar,
    Cards,
  },
  setup() {
    const state = ref({
      posts: [{}],
    });

    return { state };
  },
  // data() {
  // return {
  // posts: constant.posts,
  // posts: [
  //   { title: "zain", text: "this is text" },
  //   { title: "zain", text: "this is text" },
  //   { title: "zain", text: "this is text" },
  //   { title: "zain", text: "this is text" },
  // ],
  // };
  // },
  created() {
    let posts = [];
    constant.posts.map((_, i) => {
      constants.users.map((__) => {
        if (_.user === __.id) {
          posts.push(_);
          posts[i]["user"] = { ...__ };
        }
      });
    });
    console.log(this.state);
    console.log(posts);
    this.state.posts = posts;
  },
};
</script>

<style scoped>
#cards_landscape_wrap-2 {
  text-align: center;
  background: #f7f7f7;
}
#cards_landscape_wrap-2 .container {
  padding-top: 80px;
  padding-bottom: 100px;
}
#cards_landscape_wrap-2 a {
  text-decoration: none;
  outline: none;
}
#cards_landscape_wrap-2 .card-flyer {
  border-radius: 5px;
}
#cards_landscape_wrap-2 .card-flyer .image-box {
  background: #ffffff;
  overflow: hidden;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}
#cards_landscape_wrap-2 .card-flyer .image-box img {
  -webkit-transition: all 0.9s ease;
  -moz-transition: all 0.9s ease;
  -o-transition: all 0.9s ease;
  -ms-transition: all 0.9s ease;
  width: 100%;
  height: 200px;
}
#cards_landscape_wrap-2 .card-flyer:hover .image-box img {
  opacity: 0.7;
  -webkit-transform: scale(1.15);
  -moz-transform: scale(1.15);
  -ms-transform: scale(1.15);
  -o-transform: scale(1.15);
  transform: scale(1.15);
}
#cards_landscape_wrap-2 .card-flyer .text-box {
  text-align: center;
}
#cards_landscape_wrap-2 .card-flyer .text-box .text-container {
  padding: 30px 18px;
}
#cards_landscape_wrap-2 .card-flyer {
  background: #ffffff;
  margin-top: 50px;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.4);
}
#cards_landscape_wrap-2 .card-flyer:hover {
  background: #fff;
  box-shadow: 0px 15px 26px rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  margin-top: 50px;
}
#cards_landscape_wrap-2 .card-flyer .text-box p {
  margin-top: 10px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-size: 14px;
  letter-spacing: 1px;
  color: #000000;
}
#cards_landscape_wrap-2 .card-flyer .text-box h6 {
  margin-top: 0px;
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Roboto Black", sans-serif;
  letter-spacing: 1px;
  color: #00acc1;
}
</style>