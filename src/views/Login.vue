<template>
  <section class="login-page" v-if="!user">
    <div class="content-container">
      <div class="left">
        <h1 class="logo">Spiik</h1>
        <h2>Spiik helps you connet with friends and family</h2>
      </div>
      <div class="right">
        <div class="form-container">
          <div class="login">
            <form @submit.prevent="login">
              <div class="email">
                <input
                  type="email"
                  placeholder="Email address"
                  v-model="login_form.email"
                />
              </div>
              <div class="password">
                <input
                  type="password"
                  placeholder="Password"
                  v-model="login_form.password"
                />
              </div>
              <input class="login-btn blue-btn" type="submit" value="Log In" />
            </form>
            <a href="#" class="forgot-password">Forgotten Password?</a>
            <button
              type="submit"
              class="signup-btn green-btn"
              @click="showSignup = true"
            >
              Create an Account
            </button>
          </div>
          <div class="signup" :class="showSignup ? 'show' : 'hide'">
            <form action="" @submit.prevent="register">
              <div class="name">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  v-model="register_form.name"
                />
              </div>
              <div class="username">
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  v-model="register_form.username"
                />
              </div>
              <div class="email">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email address"
                  v-model="register_form.email"
                />
              </div>
              <div class="password">
                <input
                  type="password"
                  placeholder="Password"
                  v-model="register_form.password"
                />
              </div>
              <input
                class="signup-btn blue-btn"
                type="submit"
                value="Sign Up"
              />
            </form>
            <hr />
            <button
              type="submit"
              class="login-btn green-btn"
              @click="showSignup = false"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <ProfileEdit :register_form="register_form" v-if="user" />
</template>

<script setup>
import ProfileEdit from "@/components/ProfileEdit.vue";
import { useStore } from "vuex";
import { ref, reactive } from "vue";
import { mapMutations } from "vuex";
import { onBeforeMount, computed } from "vue";
const showSignup = ref(false);
const login_form = ref({});
const register_form = ref({});
const store = useStore();

const user = computed(() => store.getters.users);

const login = () => {
  store.dispatch("login", login_form.value);
};
const register = () => {
  console.log("register", register_form.value);
  store.dispatch("register", register_form.value);
};
</script>

<style scoped>
/* Reuseables */
.blue-btn {
  background: rgba(53, 109, 200, 0.9);
  border: none;
  border-radius: 6px;
  font-size: 20px;
  padding: 14px 10px;
  width: 80%;
  transition: all 0.3s ease-in-out;
}
.blue-btn:hover {
  background: rgb(53, 109, 200);
}
.green-btn {
  background: rgba(43, 119, 43, 0.9);
  border: none;
  border-radius: 6px;
  font-size: 20px;
  padding: 14px 10px;
  width: 80%;
  transition: all 0.3s ease-in-out;
}

.green-btn:hover {
  background: rgb(43, 119, 43);
}
/* Input */
input {
  width: 100%;
  padding: 14px 10px;
  border-radius: 6px;
  background: #fff;
  border: 1px solid #dddfe2;
  color: #1d2128;
  font-size: 18px;
}

.email,
.password,
.name,
.username {
  padding: 10px 5px;
}
.show {
  visibility: visible;
  opacity: 1;
}
.hide {
  visibility: hidden;
  opacity: 0;
}

/* Login Page */
.login-page {
  padding-bottom: 112px;
  padding-top: 72px;
  padding-left: 20px;
  padding-right: 20px;
}
.login-page .content-container {
  margin: 0 auto;
  margin-top: 80px;
  padding: 20px 0;
  position: relative;
  max-width: 980px;
  display: flex;
  /* align-items: center; */
}
.login-page .content-container .left {
  padding-right: 20px;
  width: 60%;
}
.login-page .content-container .left .logo {
  color: var(--feature-color);
  font-size: 60px;
  padding: 112px 0 16px;
}
.login-page .content-container .left h2 {
  font-size: 28px;
  line-height: 32px;
}

/* Form */
.form-container {
  position: relative;
}

.login {
  text-align: center;
  padding: 10px 5px;
  width: 400px;
  background: #fff;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
}
.login input {
}
.login .login-btn {
  margin-top: 20px;
}
.login .forgot-password {
  text-decoration: none;
  display: inline-block;
  color: var(--feature-color);
  margin-top: 20px;
}
.login .signup-btn {
  margin-top: 20px;
  margin-bottom: 30px;
}

/* SignUp */
.signup {
  text-align: center;
  width: 400px;
  background: #fff;
  border-radius: 10px;
  padding: 10px 5px;
  /* display: none; */
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
}
.signup .signup-btn {
  margin-top: 20px;
  margin-bottom: 10px;
}
.signup .login-btn {
  margin-top: 20px;
  margin-bottom: 30px;
}

@media only screen and (max-width: 900px) {
  .login-page .content-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
  .login-page .content-container .left {
    padding-right: 0;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  .login-page .content-container .left .logo {
    padding: 0;
  }
}
@media only screen and (max-width: 450px) {
  .login,
  .signup {
    width: 350px;
  }
}
</style>
