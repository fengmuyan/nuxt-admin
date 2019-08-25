<template>
  <div class="inquiryOrders">
    <p class="top">我的询价</p>
    <div class="main">
      <ul class="nav clearfix">
        <li
          v-for="(item,index) in navData"
          :key="index"
          :class="{active:navActiveIndex==='/myOrder/inquiryOrders' && $route.query.status===item.status}"
        >
          <nuxt-link
            :to="{path:'/myOrder/inquiryOrders',query:item.status?{status:item.status}:null}"
          >{{item.title}}</nuxt-link>
          <span v-if="item.num">{{item.num}}</span>
        </li>
      </ul>
      <el-form :model="form" label-width="84px" :inline="true" class="orderForm">
        <el-form-item label="关键字搜索：" class="first">
          <el-input v-model="form.name" placeholder="订单号/商品名称"></el-input>
        </el-form-item>
        <el-form-item label="订单状态：" class="second">
          <el-select v-model="form.name" placeholder="全部">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="订单时间：" class="third">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <el-form-item class="last">
          <span class="fir">搜索</span>
          <span class="sec">重置</span>
        </el-form-item>
      </el-form>
      <div class="mainContent">
        <div class="tableContent">
          <p class="topTile">
            <span>2019-02-06 15:23:45</span>
            <span>订单编号：2324354657</span>
            <span>
              询价状态：
              <b>已报价</b>
            </span>
          </p>
          <div class="botContent">
            <div class="content">
              <div class="fir">
                <span>项目名称：</span>
                <b>永利国际商务写字楼改造</b>
              </div>
              <div class="sec clearfix">
                <span>需求描述：</span>
                <b>本工程占地面积3000平米，共22曾，永利国际商务写字楼改造永利国际商务写字楼改造，永利国际商务写字楼改造永利国际商务写字楼改造永利国际商务写字楼改造，永字楼改造。</b>
              </div>
              <div class="thir">
                <span>需求图片：</span>
                <ul class="clearfix">
                  <li>
                    <img src="@/assets/imgs/myOrder/inquiryOrders/inquiry.png" alt />
                  </li>
                  <li>
                    <img src="@/assets/imgs/myOrder/inquiryOrders/inquiry.png" alt />
                  </li>
                  <li>
                    <img src="@/assets/imgs/myOrder/inquiryOrders/inquiry.png" alt />
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn">
              <span @click="toDetail">查看详情</span>
            </div>
          </div>
        </div>
        <div class="tableContent">
          <p class="topTile">
            <span>2019-02-06 15:23:45</span>
            <span>订单编号：2324354657</span>
            <span>
              询价状态：
              <b>已报价</b>
            </span>
          </p>
          <div class="botContent">
            <div class="content">
              <div class="fir">
                <span>项目名称：</span>
                <b>永利国际商务写字楼改造</b>
              </div>
              <div class="sec clearfix">
                <span>需求描述：</span>
                <b>本工程占地面积3000平米，共22曾，永利国际商务写字楼改造永利国际商务写字楼改造，永利国际商务写字楼改造永利国际商务写字楼改造永利国际商务写字楼改造，永字楼改造。</b>
              </div>
              <div class="thir">
                <span>需求图片：</span>
                <ul class="clearfix">
                  <li>
                    <img src="@/assets/imgs/myOrder/inquiryOrders/inquiry.png" alt />
                  </li>
                  <li>
                    <img src="@/assets/imgs/myOrder/inquiryOrders/inquiry.png" alt />
                  </li>
                  <li>
                    <img src="@/assets/imgs/myOrder/inquiryOrders/inquiry.png" alt />
                  </li>
                </ul>
              </div>
            </div>
            <div class="btn">
              <span @click="toDetail">查看详情</span>
            </div>
          </div>
        </div>
      </div>
      <page-list :total="100" class="page"></page-list>
    </div>
  </div>
</template>

<script>
import PageList from "@/components/myOrder/PageList";
import { mapGetters } from "vuex";
export default {
  name: "inquiryOrders",
  components: {
    PageList
  },
  computed: {
    ...mapGetters(["navActiveIndex"])
  },
  data() {
    return {
      form: { name: "", time: "" },
      navData: [
        { title: "全部询价" },
        { title: "询价中", num: 2, status: "11" },
        { title: "已报价", num: 6, status: "22" },
        { title: "已取消", status: "33" }
      ]
    };
  },
  methods: {
    toDetail() {
      this.$router.push({ name: "myOrder-inquiryDetail" });
    }
  }
};
</script>

<style lang="scss">
.inquiryOrders {
  .top {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    font-size: 16px;
    padding-left: 24px;
  }
  .main {
    margin-top: 15px;
    background-color: #fff;
    min-height: 500px;
    padding: 11px 25px 0 25px;
    .nav {
      height: 40px;
      border-bottom: 1px solid #ececec;
      width: 100%;
      li {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #333;
        border-bottom: 3px solid transparent;
        float: left;
        margin-right: 40px;
        cursor: pointer;
        span {
          color: #ff0000;
        }
      }
      li.active {
        border-color: #14cfa0;
      }
    }
  }
  .orderForm {
    width: 100%;
    margin-top: 20px;
    .el-form-item__label {
      padding-right: 0;
      text-align: left;
      font-size: 14px;
    }
    .el-form-item {
      margin: 0;
      margin-right: 10px;
    }
    .el-form-item:last-child {
      margin-right: 0;
    }
    .el-input__inner {
      font-size: 12px;
      height: 25px;
      line-height: 23px;
      padding: 0 10px;
    }
    .first {
      .el-input__inner {
        width: 170px;
      }
    }
    .second {
      .el-form-item__label {
        text-align: right;
      }
      .el-input__inner {
        width: 111px;
      }
      .el-select__caret {
        font-size: 12px;
        margin-top: 1px;
      }
    }
    .third {
      .el-form-item__label {
        text-align: right;
      }
      .el-input__inner {
        width: 230px;
        border-radius: 0;
      }
      .el-range__icon,
      .el-range__close-icon {
        line-height: 25px;
      }
      .el-range-input {
        font-size: 12px;
      }
      .el-range-separator {
        font-size: 12px;
        line-height: 25px;
        width: 12%;
      }
    }
    .last {
      span {
        display: inline-block;
        width: 60px;
        height: 25px;
        border: 1px solid #00cc99;
        text-align: center;
        line-height: 23px;
        font-size: 12px;
        cursor: pointer;
        color: #00cc99;
      }
      span.fir {
        background-color: #00cc99;
        color: #fff;
        margin-right: 10px;
        margin-left: 15px;
      }
    }
  }
  .mainContent {
    margin-top: 20px;
    .tableContent {
      margin-bottom: 12px;
      .topTile {
        height: 45px;
        line-height: 43px;
        font-size: 14px;
        color: #333;
        background-color: #f7f8f8;
        span {
          margin-left: 28px;
        }
        b {
          color: #00cc99;
        }
      }
      .botContent {
        padding: 30px 0px 30px 27px;
        height: 248px;
        border: 1px solid #ececec;
        border-top: none;
        margin-bottom: 12px;
        .content {
          float: left;
          width: 572px;
          height: 100%;
          font-size: 12px;
          color: #333;
          .fir {
            height: 12px;
            line-height: 12px;
            margin-bottom: 18px;
            span {
              float: left;
            }
          }
          .sec {
            span {
              float: left;
              height: 34px;
            }
            b {
              line-height: 18px;
            }
            margin-bottom: 20px;
          }
          .thir {
            span {
              float: left;
              height: 90px;
            }
            ul > li {
              width: 100px;
              height: 100px;
              float: left;
              margin-right: 10px;
            }
          }
        }
        .btn {
          float: right;
          width: 200px;
          height: 100%;
          line-height: 187px;
          text-align: center;
          span {
            display: inline-block;
            width: 90px;
            height: 30px;
            line-height: 30px;
            border: 1px solid #14cfa0;
            text-align: center;
            color: #14cfa0;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>