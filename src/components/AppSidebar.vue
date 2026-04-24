<script setup lang="ts">

</script>

<template>
  <div class="app-slidebar">
    <section class="app-slidebar-header-box">
      <div class="app-slidebar-logo-box">
        <img src="@/assets/images/layout/logo.png" alt="">
      </div>
    </section>
    <section class="app-slidebar-box">
      <ul>
        <li class="active">
          <span class="app-slidebar-icon-box"><img src="@/assets/icons/home.png" alt=""></span>
          <span class="app-slidebar-title-box">首页</span>
        </li>
        <li>
          <span class="app-slidebar-icon-box"><img src="@/assets/icons/order.png" alt=""></span>
          <span class="app-slidebar-title-box">订单</span>
        </li>
        <li>
          <span class="app-slidebar-icon-box"><img src="@/assets/icons/product.png" alt=""></span>
          <span class="app-slidebar-title-box">商品</span>
        </li>
        <li>
          <span class="app-slidebar-icon-box"><img src="@/assets/icons/store.png" alt=""></span>
          <span class="app-slidebar-title-box">店铺</span>
        </li>
        <li>
          <span class="app-slidebar-icon-box"><img src="@/assets/icons/account.png" alt=""></span>
          <span class="app-slidebar-title-box">提现</span>
        </li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.app-slidebar {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FFFFFF;
}

.app-slidebar-header-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.app-slidebar-logo-box {
  width: 150px;
  height: 34px;
}

.app-slidebar-logo-box img{
  width: 100%;
  height: 100%;
}

.app-slidebar-box {
  margin-top: 20px;
}

.app-slidebar-box ul {
  list-style: none;
}

.app-slidebar-box ul li {
  width: 100%;
  height: 50px;
}

.app-slidebar-box .app-slidebar-title-box {
  margin-left: 20px;
}

</style>
