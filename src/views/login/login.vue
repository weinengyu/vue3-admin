<script setup lang="ts">
import { ref } from 'vue'
import router from "@/router";

const username = ref('')
const password = ref('')

const handleLogin = () => {
  console.log(111)
  router.replace('/dashboard')
  return false
}


</script>

<template>
  <div class="login-page">
    <section class="brand-box">
      <img src="@/assets/images/login/brand.png" alt="">
    </section>
    <section class="login-box">
      <div class="logo-box">
        <img src="@/assets/images/login/logo.png" alt="">
      </div>
      <p class="title">登录</p>
      <form>
        <label class="user-label">
          <input v-model="username" type="text" name="username">
        </label>
        <label class="password-label">
          <input v-model="password" type="password" name="password">
        </label>
        <div class="button-box">
          <button type="button" @click="handleLogin()">登录</button>
        </div>
      </form>
    </section>
  </div>
</template>

<style scoped>
.login-page {
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
}

.brand-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1A66FF;
}

.login-box {
  width: 342px;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  margin-left: 100px;
}

.login-box .title {
  color: #5b5959;
  margin-top: 40px;
  font-size: 24px;
  line-height: 1.2;
  text-align: left;
}

.login-box .logo-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.login-box .logo-box img {
  width: 242px;
  height: 56px;
}

form label {
  width: 100%;
  display: block;
  margin-top: 40px;
  padding-left: 20px;
}

form .user-label {
  background-image: url("@/assets/images/login/user-icon.png");
  background-position: 0 center;
  background-repeat: no-repeat;
}

form .password-label {
  background-image: url("@/assets/images/login/password-icon.png");
  background-position: 0 center;
  background-repeat: no-repeat;
}

form input {
  width: 100%;
  height: 18px;
  padding-left: 18px;
  border: none;
  border-bottom: 1px solid #E1E2E6;
  outline: none;
  background: transparent;
}

form input:focus {
  border: none;
  border-bottom: 1px solid #E1E2E6;
  outline: none;
}

form button {
  margin-top: 20px;
  width: 100%;
  height: 54px;
  background-color: #1966FF;
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-size: 18px;
}
</style>
