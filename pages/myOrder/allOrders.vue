<template>
  <div class="allOrders">
    <p class="top">我的订单</p>
    <div class="main">
      <ul class="nav clearfix">
        <li
          v-for="(item,index) in navData"
          :key="index"
          :class="{active:navActiveIndex==='/myOrder/allOrders' && $route.query.status===item.status}"
        >
          <nuxt-link
            :to="{path:'/myOrder/allOrders',query:item.status?{status:item.status}:null}"
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
      <el-table :data="[]" style="width: 100%" class="thTable">
        <el-table-column label="订单信息" width="496"></el-table-column>
        <el-table-column label="数量" width="155"></el-table-column>
        <el-table-column label="总金额" width="142"></el-table-column>
        <el-table-column label="操作" width="162"></el-table-column>
      </el-table>
      <div class="mainContent">
        <div class="tableContent">
          <p class="topTile">
            <span>2019-02-06 15:23:45</span>
            <span>订单编号：2324354657</span>
          </p>
          <el-table :data="[{},{}]" style="width: 100%" :span-method="objectSpanMethod">
            <el-table-column label="订单信息" width="496">
              <template>
                <div class="imgBox">
                  <img src="@/assets/imgs/myOrder/allOrders/order-goods.png" alt />
                </div>
                <div class="content">
                  <h4>
                    Disney米奇缤纷乐园保鲜盒超值两件套保鲜盒超值两
                    件套保鲜盒超值两
                  </h4>
                  <p>规格参数：300mm×240mm×2010mm</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="数量" width="155">×15</el-table-column>
            <el-table-column label="总金额" width="142">￥606,868.00</el-table-column>
            <el-table-column label="操作" width="162">
              <template>
                <span class="toDetail" @click="toDetail">查看详情</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="tableContent">
          <p class="topTile">
            <span>2019-02-06 15:23:45</span>
            <span>订单编号：2324354657</span>
          </p>
          <el-table :data="[{}]" style="width: 100%" :span-method="objectSpanMethod">
            <el-table-column label="订单信息" width="496">
              <template>
                <div class="imgBox">
                  <img src="@/assets/imgs/myOrder/allOrders/order-goods.png" alt />
                </div>
                <div class="content">
                  <h4>
                    Disney米奇缤纷乐园保鲜盒超值两件套保鲜盒超值两
                    件套保鲜盒超值两
                  </h4>
                  <p>规格参数：300mm×240mm×2010mm</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="数量" width="155">×15</el-table-column>
            <el-table-column label="总金额" width="142">￥606,868.00</el-table-column>
            <el-table-column label="操作" width="162">
              <template>
                <span class="toDetail" @click="toDetail">查看详情</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="tableContent">
          <p class="topTile">
            <span>2019-02-06 15:23:45</span>
            <span>订单编号：2324354657</span>
          </p>
          <el-table :data="[{}]" style="width: 100%" :span-method="objectSpanMethod">
            <el-table-column label="订单信息" width="496">
              <template>
                <div class="imgBox">
                  <img src="@/assets/imgs/myOrder/allOrders/order-goods.png" alt />
                </div>
                <div class="content">
                  <h4>
                    Disney米奇缤纷乐园保鲜盒超值两件套保鲜盒超值两
                    件套保鲜盒超值两
                  </h4>
                  <p>规格参数：300mm×240mm×2010mm</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="数量" width="155">×15</el-table-column>
            <el-table-column label="总金额" width="142">￥606,868.00</el-table-column>
            <el-table-column label="操作" width="162">
              <template>
                <span class="toDetail" @click="toDetail">查看详情</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="tableContent">
          <p class="topTile">
            <span>2019-02-06 15:23:45</span>
            <span>订单编号：2324354657</span>
          </p>
          <el-table :data="[{},{},{}]" style="width: 100%" :span-method="objectSpanMethod">
            <el-table-column label="订单信息" width="496">
              <template>
                <div class="imgBox">
                  <img src="@/assets/imgs/myOrder/allOrders/order-goods.png" alt />
                </div>
                <div class="content">
                  <h4>
                    Disney米奇缤纷乐园保鲜盒超值两件套保鲜盒超值两
                    件套保鲜盒超值两
                  </h4>
                  <p>规格参数：300mm×240mm×2010mm</p>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="数量" width="155">×15</el-table-column>
            <el-table-column label="总金额" width="142">￥606,868.00</el-table-column>
            <el-table-column label="操作" width="162">
              <template>
                <span class="toDetail" @click="toDetail">查看详情</span>
              </template>
            </el-table-column>
          </el-table>
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
  name: "allOrders",
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
        { title: "我的订单" },
        { title: "待付款", num: 2, status: "11" },
        { title: "待收货", num: 6, status: "22" },
        { title: "已完成", status: "33" },
        { title: "已取消", status: "44" }
      ]
    };
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 2 || columnIndex === 3) {
        return {
          rowspan: 20,
          colspan: 1
        };
      }
    },
    toDetail() {
      this.$router.push({ name: "myOrder-orderDetail" });
    }
  }
};
</script>
<style lang="scss">
.allOrders {
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
  .thTable {
    margin-top: 20px;
    th.is-leaf {
      border: none;
    }
    th {
      padding: 0;
    }
    .el-table__header-wrapper {
      height: 45px;
      .cell {
        height: 45px;
        line-height: 45px;
        background-color: #f7f8f8;
        font-size: 14px;
        text-align: center;
      }
    }
    .el-table__empty-block {
      display: none;
    }
  }
  .el-table::before {
    height: 0;
  }
  .mainContent {
    margin-top: 12px;
    .tableContent {
      margin-bottom: 12px;
      .topTile {
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        color: #333;
        background-color: #f7f8f8;
        span {
          margin-left: 28px;
        }
      }
      .el-table {
        .has-gutter {
          display: none;
        }
        td {
          padding: 20px 0;
          border: 1px solid #ebeef5;
          border-top: none;
        }
        .el-table__row {
          td:nth-child(2) {
            border-left: none;
            border-right: none;
          }
          td:nth-child(3) {
            border-right: none;
          }
        }
        .el-table__body tr:hover > td {
          background-color: #fff;
        }
        .cell {
          text-align: center;
          padding: 0 25px;
          height: 100px;
          font-size: 12px;
          line-height: 100px;
        }

        .imgBox {
          width: 100px;
          height: 100px;
          margin-right: 18px;
          float: left;
          img {
            float: left;
          }
        }
        .content {
          float: left;
          text-align: left;
          width: 279px;
          h4 {
            margin-top: 5px;
            line-height: 22px;
            color: black;
          }
          p {
            line-height: 44px;
            color: #999999;
          }
        }
        .toDetail {
          cursor: pointer;
          &:hover {
            color: #14cfa0;
          }
        }
      }
    }
  }
}
</style>