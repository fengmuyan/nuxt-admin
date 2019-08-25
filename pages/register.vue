<template>
  <div class="register">
    <login-top></login-top>
    <div class="register-out">
      <div class="register-inner">
        <h2 class="title">会员注册</h2>
        <el-form :model="registForm" status-icon :rules="rules" ref="registForm">
          <el-form-item prop="username">
            <el-input type="text" v-model="registForm.username" placeholder="手机号/用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="registForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item prop="email">
            <el-input type="text" v-model="registForm.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-row :gutter="20">
              <el-col :span="16">
                <el-input type="text" placeholder="验证码" v-model="registForm.code"></el-input>
              </el-col>
              <el-col :span="8" class="code">
                <div @click="sendCode">{{timerLoading?`${timer}秒后发送`:'获取验证码'}}</div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item prop="checked" class="nomg">
            <el-checkbox v-model="checked">我已阅读并同意《居想网协议》</el-checkbox>
          </el-form-item>
          <el-form-item class="btn">
            <el-button type="success" :loading="loading" @click="submitForm('registForm')">注册账号</el-button>
          </el-form-item>
          <el-form-item prop="checked" class="nomg">
            <span>已有账号，</span>
            <nuxt-link to="/login" class="colorSuccess">马上登录</nuxt-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <login-bottom></login-bottom>
  </div>
</template>
<script>
import LoginTop from "@/components/login/LoginTop";
import LoginBottom from "@/components/login/LoginBottom";
export default {
  name: "register",
  layout: "login",
  components: {
    LoginTop,
    LoginBottom
  },
  data() {
    return {
      checked: true,
      loading: false,
      timer: 60,
      timerLoading: false,
      registForm: {
        username: "",
        password: "",
        code: "",
        email: ""
      },
      rules: {
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm: this.$utils.throttle(function(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          try {
            this.loading = true;
            const { username, password, code, email } = this.registForm;
            const { code: status, msg } = await this.$axios.register({
              username,
              password: this.$utils.encrypt(JSON.stringify(password)),
              code,
              email
            });
            this.$utils.apiResponse(this, status, {
              sucStr: "注册成功",
              errStr: msg,
              nextSucAction: () => {
                this.$router.push({
                  path: "/"
                });
              }
            });
            this.loading = false;
          } catch (err) {
            this.loading = false;
            console.log(err);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }, 2000),

    sendCode: this.$utils.throttle(async function() {
      if (this.timerLoading) {
        return false;
      } else {
        try {
          const username = this.registForm.username;
          const email = this.registForm.email;
          const { code, msg } = await this.$axios.verify({ username, email });
          this.$utils.apiResponse(this, code, {
            sucStr: "发送成功",
            errStr: msg,
            nextSucAction: () => {
              this.timerLoading = true;
              const time = setInterval(() => {
                this.timer--;
                if (this.timer === 0) {
                  this.timer = 60;
                  this.timerLoading = false;
                  clearInterval(time);
                }
              }, 1000);
            }
          });
        } catch (err) {
          console.log(err);
        }
      }
    }, 2000)
  }
};
</script>

<style lang="scss">
.register {
  .register-out {
    height: 600px;
    background: url(../assets/imgs/login/login-bg.jpg) no-repeat center 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .register-inner {
      height: 505px;
      width: 450px;
      background: #fff;
      .title {
        font-size: 18px;
        text-align: center;
        margin-top: 40px;
      }
      .el-form {
        width: 300px;
        margin: 28px auto 0;
      }
    }
    .el-input--medium .el-input__inner {
      height: 45px;
      line-height: 45px;
    }
    .nomg {
      margin-bottom: 0 !important;
    }
    .code {
      line-height: 45px;
      cursor: pointer;
    }
    .btn {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>