<template>
  <div class="OrderLeft">
    <ul>
      <li v-for="(item,index) in itemArr" :key="index">
        <span class="title">{{item.title}}</span>
        <ul class="childheight">
          <li v-for="(v,i) in item.pathArr" :key="i">
            <nuxt-link
              :class="{'status-con':true,'active': v.path===navActiveIndex && $route.query.status===v.status}"
              :to="{path:v.path,query:v.status?{status:v.status}:null}"
            >{{v.name}}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OrderLeft",
  data() {
    return {
      itemArr: [
        {
          title: "我的询价",
          pathArr: [
            { name: "全部询价", path: "/myOrder/inquiryOrders" },
            { name: "询价中", path: "/myOrder/inquiryOrders", status: "11" },
            { name: "已报价", path: "/myOrder/inquiryOrders", status: "22" },
            { name: "已取消", path: "/myOrder/inquiryOrders", status: "33" }
          ]
        },
        {
          title: "我的订单",
          pathArr: [
            { name: "全部订单", path: "/myOrder/allOrders" },
            { name: "待付款", path: "/myOrder/allOrders", status: "11" },
            { name: "待发货", path: "/myOrder/allOrders", status: "22" },
            { name: "已完成", path: "/myOrder/allOrders", status: "33" },
            { name: "已取消", path: "/myOrder/allOrders", status: "44" }
          ]
        },
        {
          title: "退货售后",
          pathArr: [{ name: "我的退货", path: "" }]
        },
        {
          title: "积分优惠",
          pathArr: [
            { name: "我的优惠券", path: "/myOrder/ticketsIntegral/integral" },
            { name: "我的积分", path: "/myOrder/ticketsIntegral/tickets" }
          ]
        },
        {
          title: "账户设置",
          pathArr: [
            { name: "个人信息", path: "/myOrder/AccountSetting" },
            {
              name: "收货地址",
              path: "/myOrder/AccountSetting/ShippingAddress"
            },
            {
              name: "修改密码",
              path: "/myOrder/AccountSetting/ChangePsw"
            },
            {
              name: "意见反馈",
              path: "/myOrder/AccountSetting/FeedBack"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["navActiveIndex"])
  },
};
</script>

<style lang="scss">
.OrderLeft {
  * {
    box-sizing: content-box;
  }
  width: 175px;
  background: white;
  float: left;
  margin-right: 20px;
  padding: 30px 0px;
  .title {
    width: 95px;
    height: 38px;
    line-height: 38px;
    font-size: 16px;
    color: #343434;
    font-weight: 600;
    padding: 0px 40px;
  }
  .childheight {
    padding: 0px 40px 30px 40px;
    li {
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      .status-con {
        width: 100%;
        font-size: 14px;
        display: inline-block;
      }
    }
  }
  ul {
    & > li:last-child {
      .childheight {
        padding-bottom: 0;
      }
    }
  }
  .active {
    color: #14d0a0;
  }
}
</style>
