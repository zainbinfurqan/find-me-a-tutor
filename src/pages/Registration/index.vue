<template>
  <div class="container-main">
    <div class="login-page">
      <div class="form">
        <form class="register-form">
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email address" />
          <input type="password" placeholder="password" />
          <button>create</button>
          <p class="message">
            Already registered?
            <router-link to="login">Sign In</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Registration",
  setup() {
    const state = ref({
      name: "",
      email: "",
      password: "",
      error: {},
      emailRegex: "",
      phoneNumber: "",
    });

    function registration() {
      try {
        const isCheckValidate = validate();
        console.log(isCheckValidate);
      } catch (error) {
        console.log(error);
      }
    }

    function validate() {
      const error = {};

      if (!state.value.name) {
        error.email = "This field is required";
      } else {
        if (state.value.name.length < 3) {
          error.email = "Invalid name formate";
        }
      }

      if (!state.value.email) {
        error.email = "This field is required";
      } else {
        if (!state.value.email) {
          error.email = "Invalid email formate";
        }
      }

      if (!state.value.password) {
        error.password = "This field is required";
      } else {
        if (state.value.password.length < 8) {
          error.password = "Characters must be 8 or more";
        }
      }

      if (!state.value.phoneNumber) {
        error.phoneNumber = "This field is required";
      } else {
        if (state.value.phoneNumber.length < 3) {
          error.phoneNumber = "Invalid number ";
        }
      }

      state.value.error = error;
      return Object.keys(error).length == 0 ? true : false;
    }
    return {
      state,
      validate,
      registration,
    };
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

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
  display: block;
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
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8dc26f);
  background: -moz-linear-gradient(right, #76b852, #8dc26f);
  background: -o-linear-gradient(right, #76b852, #8dc26f);
  background: linear-gradient(to left, #76b852, #8dc26f);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media only screen and (max-width: 320px) {
  .login-page {
    width: 306px;
  }
}
</style>