<template>
  <div class="login-container">
    <div class="login-center">
      <div class="login-left">
        <img src="../assets/imgs/login/loginleft.png" />
      </div>
      <el-form
        class="login-form"
        autocomplete="on"
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-position="left"
      >
        <div class="formdiv">
          <div class="title-container">
            <h3 class="title">会员登录</h3>
          </div>
          <el-form-item prop="username" class="el-form-item-login">
            <el-input
              name="username"
              type="text"
              v-model="loginForm.username"
              autocomplete="on"
              placeholder="用户名"
            />
          </el-form-item>
          <el-form-item prop="password" class="el-form-item-login">
            <el-input
              name="password"
              type="password"
              v-model="loginForm.password"
              autocomplete="on"
              placeholder="密码"
            />
          </el-form-item>
          <el-form-item class="remember-me">
            <el-checkbox v-model="loginForm.rememberMe"></el-checkbox>
            <span class="txt">自动登录</span>
          </el-form-item>
          <el-button type="primary" class="submit" :loading="loading">登 录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        rememberMe: false
      },
      loginRules: {},
      loading: false
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  background: url("../assets/imgs/login/loginbg.jpg") center center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  .login-center {
    width: 1105px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -552.5px;
    margin-top: -209.5px;
    .login-left {
      width: 686px;
      float: left;
      padding-top: 165px;
    }
    .login-form {
      width: 419px;
      float: left;
      background: rgba(35, 24, 21, 0.5);
      height: 419px;
      border-radius: 10px;
      .formdiv {
        padding: 0 69px;
      }
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: #889aa4;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title-container {
      position: relative;
      .title {
        font-size: 24px;
        font-weight: 400;
        color: #eee;
        margin: 54px 0;
        height: 24px;
        line-height: 24px;
        text-align: center;
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: #889aa4;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
    .submit {
      height: 44px;
      font-size: 18px;
      color: #fff;
      background: #006ed6;
      border-color: #006ed6;
      width: 100%;
      border-radius: 10px;
    }
    .el-input {
      display: inline-block;
      height: 44px;
      input {
        background: #fff;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 10px;
        padding: 12px 5px 12px 15px;
        color: #eee;
        height: 44px;
        color: #000;
      }
    }
    .el-form-item-login {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      width: 279px;
      height: 44px;
      margin: 0 auto 26px;
    }
    .remember-me {
      height: 17px;
      line-height: 14px;
      overflow: hidden;
      padding-top: 3px;
      margin-bottom: 25px;
      .el-form-item__content {
        line-height: 14px;
      }
      .txt {
        margin-left: 5px;
        color: #fff;
      }
    }
  }
}
</style>
