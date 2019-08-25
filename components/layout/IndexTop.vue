<template>
  <div class="IndexTop">
    <div class="container">
      <ul class="clearfix">
        <li v-if="userInfo">你好，{{userInfo.username}}</li>
        <li v-if="userInfo" @click="loginOut">退出登陆</li>
        <li v-if="!userInfo">
          <nuxt-link to="/login">你好，请登录</nuxt-link>
        </li>
        <li v-if="!userInfo">
          <nuxt-link to="/register">立即注册</nuxt-link>
        </li>
        <li class="myJx" @mouseenter="dropToShow" @mouseleave="dropToHide">
          我的居想
          <i class="el-icon-arrow-down"></i>
          <ul class="position" v-show="dropShow" @mouseenter="dropToShow" @mouseleave="dropToHide">
            <li :class="{active:$route.path==='/myOrder/allOrders'}">
              <nuxt-link to="/myOrder/allOrders">我的订单</nuxt-link>
            </li>
            <li :class="{active:$route.path==='/myOrder/inquiryOrders'}">
              <nuxt-link to="/myOrder/inquiryOrders">我的询价</nuxt-link>
            </li>
            <li :class="{active:$route.path==='/myOrder'}">
              <nuxt-link to="/myOrder">个人中心</nuxt-link>
            </li>
            <li>退出</li>
          </ul>
        </li>
        <li class="icon">
          <i class="el-icon-phone"></i>400-6166-770
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexTop",
  data() {
    return {
      dropShow: false
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    dropToShow() {
      this.dropShow = true;
    },
    dropToHide() {
      this.dropShow = false;
    },
    loginOut() {
      this.$confirm("确定要退出吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          try {
            const { code } = await this.$axios.loginOut();
            this.$utils.apiResponse(this, code, {
              sucStr: "退出成功",
              nextSucAction: () => {
                this.$store.dispatch("delUserInfo");
              }
            });
          } catch (err) {
            console.log(err);
          }
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="scss">
.IndexTop {
  * {
    box-sizing: content-box;
  }
  background-color: #2b2a32;
  height: 38px;
  .container {
    text-align: right;
    height: 100%;
    ul {
      float: right;
      li {
        float: left;
        padding: 0 13px;
        font-size: 12px;
        height: 38px;
        line-height: 36px;
        color: #ccccca;
        cursor: pointer;
        a {
          color: #ccccca;
        }
        &:hover {
          a {
            color: #14d0a0;
          }
        }
      }
      li.myJx {
        border: 1px solid transparent;
        border-bottom: none;
        padding-right: 10px;
        position: relative;
        &:hover {
          background-color: #fff;
          border: 1px solid #cccccc;
          border-bottom: none;
          color: #2b2a32;
        }
        .position {
          border: 1px solid #cccccc;
          background-color: #fff;
          border-top: none;
          width: 87px;
          height: 122px;
          position: absolute;
          left: -1px;
          z-index: 600;
          padding: 6px 0;
          & > li {
            height: 30px;
            line-height: 30px;
            color: #2b2a32;
            a {
              display: inline-block;
              width: 100%;
              color: #2b2a32;
            }
          }
          li.active {
            a {
              color: #14d0a0;
            }
          }
        }
      }
      li.icon {
        padding-right: 0;
        i {
          margin-right: 5px;
          font-size: 14px;
        }
        &:before {
          content: "|";
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
