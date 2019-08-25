<template>
  <div class="login">
    <login-top></login-top>
    <div class="login-out">
      <div class="login-inner">
        <el-tabs v-model="activeName">
          <el-tab-pane label="密码登录" name="first">
            <el-form :model="pwForm" status-icon :rules="pwRules" ref="pwForm">
              <el-form-item prop="username">
                <el-input
                  type="text"
                  v-model="pwForm.username"
                  autocomplete="off"
                  placeholder="手机号/用户名"
                ></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  type="password"
                  placeholder="密码"
                  v-model="pwForm.password"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" :loading="pwLoading" @click="pwSubmit('pwForm')">登录</el-button>
              </el-form-item>
              <el-form-item prop="checked">
                <el-checkbox v-model="checked">自动登录</el-checkbox>
                <nuxt-link to="/register">忘记密码</nuxt-link>
                <nuxt-link to="/register" class="colorSuccess f-r">立即注册</nuxt-link>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="动态登录" name="second">
            <el-form :model="codeForm" status-icon :rules="codeRules" ref="codeForm">
              <el-form-item prop="username">
                <el-input type="text" v-model.number="codeForm.username" placeholder="手机号/用户名"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-row :gutter="20">
                  <el-col :span="16">
                    <el-input type="text" placeholder="验证码" v-model="codeForm.code"></el-input>
                  </el-col>
                  <el-col :span="8" class="code">获取验证码</el-col>
                </el-row>
              </el-form-item>
              <el-form-item>
                <el-button type="success" :loading="codeLoading" @click="codeSubmit('codeForm')">登录</el-button>
              </el-form-item>
              <el-form-item prop="checked">
                <el-checkbox v-model="checked">自动登录</el-checkbox>
                <a>忘记密码</a>
                <a href="#3" class="colorSuccess f-r">立即注册</a>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <login-bottom></login-bottom>
  </div>
</template>
<script>
import LoginTop from "@/components/login/LoginTop";
import LoginBottom from "@/components/login/LoginBottom";
import { mapMutations } from "vuex";
export default {
  name: "login",
  layout: "login",
  components: {
    LoginTop,
    LoginBottom
  },
  data() {
    return {
      activeName: "first",
      checked: true,
      pwLoading: false,
      codeLoading: false,
      pwForm: {
        password: "",
        username: ""
      },
      codeForm: {
        username: "",
        code: ""
      },
      pwRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      codeRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },
  ...mapMutations({
    toggle: "user/setUserInfo"
  }),
  methods: {
    pwSubmit: this.$utils.throttle(function(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          try {
            this.pwLoading = true;
            const { username, password } = this.pwForm;
            const { code, msg, userInfo } = await this.$axios.login({
              username,
              password: this.$utils.encrypt(JSON.stringify(password))
            });
            this.$utils.apiResponse(this, code, {
              sucStr: "登陆成功",
              errStr: msg,
              nextSucAction: () => {
                this.$store.dispatch("setUserInfo", userInfo).then(() => {
                  this.$router.push({
                    path: "/"
                  });
                });
              }
            });
            this.pwLoading = false;
          } catch (err) {
            this.pwLoading = false;
            console.log(err);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }, 2000),
    async codeSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss">
.login {
  .login-out {
    height: 600px;
    background: url(../assets/imgs/login/login-bg.jpg) no-repeat center 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-inner {
      height: 420px;
      width: 450px;
      background: #fff;
    }
    .el-input--medium .el-input__inner {
      height: 45px;
      line-height: 45px;
    }
    .el-tabs__header {
      margin-bottom: 40px;
    }
    .el-tabs {
      width: 300px;
      margin: 20px auto 0;
      .el-tabs__nav {
        width: 100%;
      }
      .el-tabs__item {
        width: 50%;
        text-align: center;
      }
      .el-tabs__active-bar {
        width: 50% !important;
      }
      .el-button {
        margin-top: 10px;
      }
      .code {
        line-height: 40px;
      }
    }
  }
}
</style>