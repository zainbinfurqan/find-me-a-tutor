<template>
  <!-- <div id="cards_landscape_wrap-2">
    <div class="container">
  <div class="row">-->
  <!-- <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4"> -->
  <div class="card-flyer pb-3">
    <div class="text-box">
      <div class="image-box">
        <img src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg" alt />
      </div>
      <div class="text-container">
        <h6>{{item.title}}</h6>
        <p>{{item.user.name}}</p>
        <p>{{item.discription}}</p>
        <div>
          <p
            class="text-left check-profile"
            data-toggle="modal"
            v-bind:data-target="'#exampleModal'+index"
          >Checkout Profile</p>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      v-bind:id="'exampleModal'+index"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{item.user.name}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import constant from "../../configuration/constants";
// import {ref} from 'vue'

export default {
  name: "Cards",
  props: ["posts", "item", "index"],
  // setup(){
  //   const state = ref({
  //     user:{}
  //   })
  // }
  beforeCreate() {
    console.log(this.item);
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
#cards_landscape_wrap-2 .card-flyer .text-box .check-profile {
  color: #00acc1;
  cursor: pointer;
  float: left;
}
</style>