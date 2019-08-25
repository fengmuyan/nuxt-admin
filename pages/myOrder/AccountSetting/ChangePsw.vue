<template>
  <div class="ChangePsw">
    <div class="OrderTop">账户设置</div>
    <div class="changepass">
      <div class="title">修改密码</div>
      <div class="process">
        <div class="firstpage clearfix">
          <div class="info f-l">
            <div class="infoimg">
              <img src="@/assets/imgs/myOrder/password/yan.png">
            </div>
            <p class="self" :class="isOne ? 'active':'noactive'">验证身份</p>
          </div>
          <div class="dash f-l">
            <p :class="isOne ? 'dashcolor':'nodash'"></p>
          </div>
          <div class="info f-l">
            <div class="infoimg">
              <img :src="isTwo ? ImgMess[0] : ImgDefalt[0]">
            </div>
            <p class="self" :class="isTwo ? 'active':'noactive'">设置新密码</p>
          </div>
          <div class="dash f-l">
            <p :class="isTwo ? 'dashcolor':'nodash'"></p>
          </div>
          <div class="info f-l">
            <div class="infoimg">
              <img :src="isThree ? ImgMess[1] : ImgDefalt[1]">
            </div>
            <p class="self" :class="isThree ? 'active':'noactive'">修改成功</p>
          </div>
        </div>
        <div class="first" v-show="pswOne">
          <el-form :model="changeForm" ref="changeForm" label-width="0px" class="demo-dynamic">
            <el-form-item>
              <span>手机号：</span>
              <span>{{changeForm.tel}}</span>
            </el-form-item>
            <el-form-item>
              <el-input class="tel"></el-input>
              <div class="huo" @click="getCode">
                <info-mation ref="InfoMation"></info-mation>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="sub el-button--success" @click="pswClick">下一步</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="first second" v-show="pswTwo">
          <el-form
            :model="changeForm"
            status-icon
            :rules="rules"
            ref="changeForm"
            label-width="0px"
            class="demo-ruleForm"
          >
            <el-form-item prop="pass">
              <el-input
                type="password"
                v-model="changeForm.pass"
                autocomplete="off"
                placeholder="请输入新密码"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkPass">
              <el-input
                type="password"
                v-model="changeForm.checkPass"
                autocomplete="off"
                placeholder="确认新密码"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="sub el-button--success" @click="succClick">下一步</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="first third clearfix" v-show="pswThree">
          <div class="success f-l">
            <img src="@/assets/imgs/myOrder/password/success.png">
          </div>
          <div class="reslogin f-l">
            <p>密码修改成功 !</p>
            <nuxt-link to="/login" class="login">请重新登录</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoMation from "~/components/myOrder/InfoMation"
export default {
  name: "ChangePsw",
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.changeForm.checkPass !== "") {
          this.$refs.changeForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
        callback(new Error("两次输入密码不一致!"));
      } else if (value !== this.changeForm.pass) {
      } else {
        callback();
      }
    };
    return {
      changeForm: {
        pass: "",
        checkPass: "",
        tel: "13695415265"
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      pswOne: true,
      pswTwo: false,
      pswThree: false,
      isOne: true,
      isTwo: false,
      isThree: false,
      ImgMess: [
        require("@/assets/imgs/myOrder/password/yan4.png"),
        require("@/assets/imgs/myOrder/password/yan5.png")
      ],
      ImgDefalt: [
        require("@/assets/imgs/myOrder/password/yan2.png"),
        require("@/assets/imgs/myOrder/password/yan3.png")
      ],
      config: {
        startText: "获取验证码",
        endText: "再次获取",
        totalTime: 60,
        tickTime: 1,
        todo: async () => {},
        computeText(num) {
          return num + "s";
        }
      }
    };
  },
  components: {
    InfoMation
  },
  methods: {
    pswClick() {
      this.pswTwo = true;
      this.pswOne = false;
      this.isTwo = true;
    },
    succClick() {
      this.pswThree = true;
      this.pswOne = false;
      this.pswTwo = false;
      this.isThree = true;
    },
    getCode() {
      this.$refs.InfoMation.getCodes(1);
    }
  }
};
</script>

<style lang="scss">
.ChangePsw {
  .OrderTop {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: white;
    padding: 0 20px;
    margin-bottom: 15px;
    font-size: 16px;
  }
  .changepass {
    background: white;
    width: 1005px;
    min-height: 600px;
    padding: 0px 24px;
    color: #333333;
    .title {
      height: 56px;
      line-height: 56px;
      border-bottom: 1px solid #ececec;
      font-size: 14px;
    }
    .process {
      .firstpage {
        width: 600px;
        padding: 70px 0px;
        margin: 0 auto;
        .info {
          text-align: center;
          width: 90px;
          .infoimg {
            height: 36px;
            line-height: 36px;
          }
          .self {
            margin-top: 25px;
            font-size: 18px;
          }
        }
        .dash {
          height: 36px;
          line-height: 36px;
          width: 113px;
          margin-left: 24px;
          margin-top: 17px;
        }
      }
      .first {
        margin: 0 auto;
        width: 350px;
        .btt {
          width: 200px;
          height: 45px;
          line-height: 45px;
        }
        .tel {
          width: 200px;
          height: 45px;
          line-height: 45px;
          float: left;
          border: #cccccc;
          .el-input__inner {
            height: 45px;
            line-height: 45px;
          }
        }
        .sub {
          width: 300px;
          height: 45px;
          line-height: 45px;
          margin-top: 10px;
        }
        .el-form-item {
          margin-bottom: 22px;
          span {
            font-size: 16px;
          }
        }
      }
      .second {
        .el-input__inner {
          width: 300px;
          height: 45px;
          line-height: 45px;
        }
      }
      .third {
        .success {
          width: 80px;
          height: 80px;
          margin-right: 40px;
          img {
            max-width: 100%;
            display: block;
          }
        }
        .reslogin {
          p {
            font-size: 30px;
            color: #333333;
            line-height: 29px;
          }
          .login {
            color: #14cfa0;
            font-size: 14px;
            line-height: 73px;
          }
        }
      }
    }
    .active {
      color: #14cfa0;
    }
    .noactive {
      color: #999999;
    }
    .dashcolor {
      border: 2px dashed #14cfa0;
    }
    .nodash {
      border: 2px dashed #999999;
    }
  }
  .huo {
    width: 90px;
    margin-left: 10px;
    height: 45px;
    float: left;
  }
}
</style>
