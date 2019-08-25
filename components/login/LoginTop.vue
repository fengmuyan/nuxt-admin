<template>
  <div class="LoginTop">
    <div class="inner">
      <nuxt-link to="/">
        <img src="@/assets/imgs/homepage/logo.png" alt="logo">
      </nuxt-link>
      <h2 class="logo-r">欢迎来到居想网！</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginTop",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.LoginTop {
  .inner {
    height: 120px;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    .logo-r {
      font-size: 24px;
      margin-left: 50px;
    }
  }
}
</style>
