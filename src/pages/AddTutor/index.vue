<template>
  <div class="container-main">
    <div class="login-page">
      <div class="form">
        <div class="login-form">
          <div class="text-left">
            <small v-if="state.error.name" class="text-danger">{{state.error.name}}</small>
          </div>
          <input v-model="state.name" type="text" placeholder="Name" />
          <div class="text-left">
            <small v-if="state.error.title" class="text-danger">{{state.error.title}}</small>
          </div>
          <input v-model="state.title" type="text" placeholder="Title" />

          <div class="text-left">
            <small v-if="state.error.phoneNumber" class="text-danger t">{{state.error.phoneNumber}}</small>
          </div>
          <input v-model="state.phoneNumber" type="number" placeholder="Phone Number" />

          <div class="text-left">
            <small
              v-if="state.error.selectedClass"
              class="text-danger"
            >{{state.error.selectedClass}}</small>
          </div>
          <div class="select-main mb-3">
            <select
              class="form-control text-secondary"
              id="exampleFormControlSelect1"
              v-model="state.selectedClass"
            >
              <option value disabled selected>Select class</option>
              <option
                v-bind:key="item.id"
                v-for="item in state.classes"
                v-bind:value="item.id"
              >{{item.name}}</option>
            </select>
          </div>

          <div class="text-left">
            <small
              v-if="state.error.selectedSubject"
              class="text-danger"
            >{{state.error.selectedSubject}}</small>
          </div>
          <div class="select-main mb-3">
            <select
              class="form-control text-secondary"
              id="exampleFormControlSelect1"
              v-model="state.selectedSubject"
            >
              <option value disabled selected>Select subject</option>
              <option
                v-bind:key="item.id"
                v-for="(item,) in state.subjects"
                v-bind:value="item.id"
              >{{item.name}}</option>
            </select>
          </div>

          <div class="text-left">
            <small v-if="state.error.description" class="text-danger">{{state.error.description}}</small>
          </div>
          <textarea
            class="form-control mb-3"
            v-model="state.description"
            placeholder="Description"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
          <button v-on:click="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import constants from "../../configuration/constants";
export default {
  name: "AddTutor",
  setup() {
    const state = ref({
      name: "",
      phoneNumber: "",
      title: "Teacher",
      classes: [],
      description: "",
      subjects: [],
      selectedClass: "",
      selectedSubject: "",
      error: {},
    });

    function submit() {
      const checkIsValid = validateFields();
      console.log(checkIsValid);
      console.log(state.value.error);
    }

    function validateFields() {
      const error = {};
      if (!state.value.name) {
        error.name = "This filed is required";
      } else {
        if (state.value.name.length < 3) {
          error.name = "Name must be atlest 3 characters";
        }
      }

      if (!state.value.title) {
        error.title = "This filed is required";
      }

      if (!state.value.phoneNumber) {
        error.phoneNumber = "This filed is required";
      } else {
        if (state.value.phoneNumber.length < 11) {
          error.phoneNumber = "Invalid number";
        }
      }

      if (!state.value.selectedClass) {
        error.selectedClass = "This filed is required";
      }

      if (!state.value.selectedSubject) {
        error.selectedSubject = "This filed is required";
      }

      if (!state.value.description) {
        error.description = "This filed is required";
      }

      state.value.error = error;
      return Object.keys(error).length == 0 ? true : false;
    }

    return {
      state,
      submit,
    };
  },

  beforeCreate() {
    this.state.classes = constants.classes;
    this.state.subjects = constants.subjects;
  },
};
</script>

<style scoped>
textarea:focus,
select:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {
  border-color: rgba(126, 239, 104, 0.8);
  box-shadow: 0 0px 0px;
  outline: 0 none;
}
.container-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}

.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
.select-main {
  height: 45px;
  background: #f2f2f2;
}
.form-control {
  background: #f2f2f2;
  border: 0px;
  height: 100%;
}
@media only screen and (max-width: 320px) {
  .login-page {
    width: 306px;
  }
}
</style>