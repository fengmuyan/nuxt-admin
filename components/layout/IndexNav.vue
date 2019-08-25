<template>
  <div :class="{ IndexNav: true, FixedTop: fixedType }">
    <div class="container">
      <ul class="main clearfix">
        <li class="first">
          <nuxt-link to="/">
            <img src="@/assets/imgs/homepage/logo.png" alt="logo" />
          </nuxt-link>
        </li>
        <li class="second">
          <el-menu
            v-if="navSwitch"
            :default-active="navActiveIndex"
            class="el-menu-demo"
            mode="horizontal"
            router
          >
            <el-menu-item index="/" v-if="navType==='common'">首页</el-menu-item>
            <el-menu-item index="/quickInquiry" v-if="navType==='common'">项目询价</el-menu-item>
            <el-menu-item index="/shoppingCart" v-if="navType==='cart'">购物车</el-menu-item>
            <el-menu-item index="/myOrder" v-if="navType==='order'">账户首页</el-menu-item>
            <el-menu-item index="/myOrder/AccountSetting" v-if="navType==='order'">账户设置</el-menu-item>
            <el-submenu index v-if="navType==='common'">
              <template slot="title">业务产品</template>
              <el-menu-item index="/serviceIndex">安装</el-menu-item>
              <el-menu-item index="/serviceIndex/afterSale">售后维保</el-menu-item>
              <el-menu-item index="/serviceIndex/serviceDesign">暖通设计</el-menu-item>
              <el-menu-item index="/serviceIndex/supplyChain">供应链金融</el-menu-item>
            </el-submenu>
          </el-menu>
        </li>
        <li class="third">
          <el-input placeholder="请输入商品名称/品牌"></el-input>
          <div class="select">
            <i class="el-icon-search"></i>
          </div>
        </li>
        <li class="last">
          <div
            :class="{ 'active': cartShow, 'cart': true }"
            @mouseenter="cartToShow"
            @mouseleave="cartToHide"
            @click="toMyCart"
          >
            <i class="el-icon-goods"></i>我的购物车
            <span class="cartNum">5</span>
          </div>
        </li>
      </ul>
      <ul v-show="cartShow" class="position" @mouseenter="cartToShow" @mouseleave="cartToHide">
        <li class="cartItem clearfix" v-for="(item,index) in cartList" :key="index">
          <div class="img">
            <img :src="item.imgSrc" alt />
          </div>
          <div class="content">
            <div class="title">
              <span class="text">{{item.title}}</span>
              <span class="btn">×{{item.num}}</span>
            </div>
            <div class="type">
              <span class="text">规格参数：{{item.type}}</span>
              <span class="btn">删除</span>
            </div>
          </div>
        </li>
        <li class="cartBtn">
          <span>
            共
            <span>20</span>件商品
          </span>
          <nuxt-link class="cart-btn" to="/shopInquiry">选好了</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexNav",
  props: {
    fixedType: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cartShow: false,
      cartList: [
        {
          imgSrc: require("@/assets/imgs/homepage/cart_03.png"),
          title: "迪士尼米奇缤纷乐园保险盒超值两件套保险盒超值",
          num: 5,
          type: "300mm×200mm×2"
        },
        {
          imgSrc: require("@/assets/imgs/homepage/cart_03.png"),
          title: "迪士尼米奇缤纷乐园保险盒超值两件套保险盒超值",
          num: 5,
          type: "300mm×200mm×2"
        },
        {
          imgSrc: require("@/assets/imgs/homepage/cart_03.png"),
          title: "迪士尼米奇缤纷乐园保险盒超值两件套保险盒超值",
          num: 5,
          type: "300mm×200mm×2"
        },
        {
          imgSrc: require("@/assets/imgs/homepage/cart_03.png"),
          title: "迪士尼米奇缤纷乐园保险盒超值两件套保险盒超值",
          num: 5,
          type: "300mm×200mm×2"
        }
      ],
      navSwitch: true,
      navType: ""
    };
  },
  watch: {
    $route() {
      this.navSwitch = false;
      this.navType = this.pathType();
      this.$nextTick(() => {
        this.navSwitch = true;
      });
    }
  },
  computed: {
    ...mapGetters(["navActiveIndex"])
  },
  created() {
    this.navType = this.pathType();
  },
  methods: {
    cartToShow() {
      this.cartShow = true;
    },
    cartToHide() {
      this.cartShow = false;
    },
    toMyCart() {
      this.$router.push({ name: "shoppingCart" });
    },
    pathType() {
      const pathName = this.$router.history.current.name;
      if (pathName) {
        if (pathName.includes("myOrder")) {
          return "order";
        } else if (pathName === "shoppingCart") {
          return "cart";
        } else {
          return "common";
        }
      }
    }
  }
};
</script>
<style lang="scss">
.IndexNav {
  * {
    box-sizing: content-box;
  }
  height: 120px;
  background-color: #fff;
  .container {
    position: relative;
    ul.main {
      padding: 40px 0;
      & > li {
        float: left;
        height: 40px;
      }
      li.first {
        width: 130px;
        margin-right: 64px;
        overflow: hidden;
        img {
          width: 130px;
        }
      }
      li.second {
        width: 300px;
        margin-right: 40px;
        .el-menu {
          border: none;
          margin-top: -11px;
          li {
            height: 90px;
            font-size: 16px;
          }
          .el-menu-item {
            border: none !important;
            padding: 0 18px;
          }
          .el-submenu {
            .el-submenu__title {
              padding: 0 18px;
              font-size: 16px;
              height: 90px;
              border: none !important;
            }
          }
        }
        .el-menu--horizontal > .el-menu-item {
          color: black;
        }
        .el-menu--horizontal > .el-menu-item.is-active {
          border-bottom: 2px solid #14d0a0;
          color: #14d0a0;
        }
        .el-menu--horizontal > .el-submenu .el-submenu__title {
          color: black;
          i {
            color: black;
          }
        }
        .el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
          border-bottom: 2px solid #14d0a0;
          color: #14d0a0;
          i {
            color: #14d0a0;
          }
        }
      }
      li.third {
        width: 452px;
        margin-right: 70px;
        position: relative;
        .el-input {
          width: 420px;
          .el-input__inner {
            border-radius: 20px;
            font-size: 15px;
            height: 40px;
            line-height: 40px;
          }
        }
        .select {
          cursor: pointer;
          position: absolute;
          right: 0;
          top: 0;
          background-color: #14d0a0;
          width: 65px;
          height: 42px;
          border-bottom-right-radius: 20px;
          border-top-right-radius: 20px;
          i {
            font-size: 23px;
            color: #fff;
            line-height: 42px;
            margin-left: 20px;
          }
        }
      }
      li.last {
        padding: 4px 0;
        height: 32px;
        width: 144px;
        .cart {
          position: relative;
          z-index: 501;
          cursor: pointer;
          padding-left: 15px;
          border: 1px solid #14d0a0;
          height: 100%;
          color: #14d0a0;
          line-height: 32px;
          i {
            margin-right: 6px;
            font-size: 16px;
          }
          .cartNum {
            display: inline-block;
            width: 16px;
            height: 16px;
            vertical-align: middle;
            background-color: #fe0000;
            border-radius: 45%;
            color: #fff;
            font-size: 13px;
            text-align: center;
            line-height: 16px;
          }
        }
        .active {
          border-color: #ccc;
          border-bottom-color: #fff;
        }
      }
    }
    ul.position {
      width: 318px;
      height: 348px;
      border: 1px solid #cccccc;
      background-color: #fff;
      position: absolute;
      z-index: 500;
      left: 880px;
      top: 77px;
      .cartItem {
        height: 50px;
        width: 294px;
        border-bottom: 1px solid #ccc;
        padding: 12px;
        cursor: pointer;
        .img {
          float: left;
          width: 48px;
          height: 48px;
          border: 1px solid #ccc;
          margin-right: 8px;
        }
        .content {
          float: left;
          .title {
            font-size: 12px;
            line-height: 18px;
            color: #323232;
            width: 236px;
            .text {
              display: inline-block;
              width: 180px;
            }
            .btn {
              float: right;
              color: #fe0000;
              height: 18px;
              line-height: 18px;
              cursor: pointer;
              font-size: 13px;
            }
          }
          .type {
            font-size: 12px;
            height: 18px;
            line-height: 18px;
            color: #a7a7a7;
            width: 236px;
            .text {
              display: inline-block;
              width: 180px;
            }
            .btn {
              color: #323232;
              float: right;
              height: 18px;
              line-height: 18px;
              cursor: pointer;
              &:hover {
                color: #14d0a0;
              }
            }
          }
        }
        &:hover {
          background-color: #f8f8f8;
        }
      }
      .cartBtn {
        height: 30px;
        background-color: #f8f8f8;
        line-height: 30px;
        padding: 9px 12px;
        & > span {
          color: #323232;
          font-size: 12px;
          span {
            color: #fe0000;
            margin: 0 3px;
          }
        }
        .cart-btn {
          float: right;
          width: 90px;
          height: 30px;
          line-height: 30px;
          font-size: 12px;
          text-align: center;
          background-color: #14d0a0;
          padding: 0;
          border: none;
          border-radius: 0;
          &:hover {
            color: #fff;
            background-color: #14d0a0;
          }
          color: #fff;
        }
      }
    }
  }
  .seatPosition {
    height: 100%;
  }
  .v-leave-active,
  .v-lezve-to,
  .horizontal-collapse-transition {
    display: none;
  }
}
.FixedTop {
  height: 68px;
  border-bottom: 1px solid #14d0a0;
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
  box-shadow: 0 2px 6px 0px rgb(200, 200, 200);
  .container {
    ul.main {
      padding: 14px 0;
      & > li {
        float: left;
        height: 40px;
      }
      li.second {
        .el-menu {
          border: none;
          margin-top: -12px;
          li {
            height: 65px;
            font-size: 16px;
          }
          .el-submenu {
            .el-submenu__title {
              height: 65px;
            }
          }
        }
      }
    }
    ul.position {
      top: 51px;
    }
  }
}
</style>
