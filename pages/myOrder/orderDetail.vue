<template>
  <div class="orderDetail">
    <p class="brand">
      <span>账户首页</span>
      <b>></b>
      <span>我的订单</span>
      <b>></b>
      <span class="orderNum">订单号：2546565263526556</span>
    </p>
    <p class="top">询价详情</p>
    <div class="statusStep clearfix">
      <div class="statusLeft">
        <p>订单号：234354354354565</p>
        <h3>待付款</h3>
      </div>
      <ul class="statusRight clearfix">
        <li>
          <div class="imgIcon"></div>
          <p class="iconTitle active">提交订单</p>
          <p class="date">
            2018-03-04
            12:23:54
          </p>
        </li>
        <li class="line">
          <div class="imgLine"></div>
        </li>
        <li>
          <div class="imgIcon imgIcon2"></div>
          <p class="iconTitle">待付款</p>
        </li>
        <li class="line">
          <div class="imgLine gryLine"></div>
        </li>
        <li>
          <div class="imgIcon imgIcon3"></div>
          <p class="iconTitle">代发货</p>
        </li>
        <li class="line">
          <div class="imgLine gryLine"></div>
        </li>
        <li>
          <div class="imgIcon imgIcon4"></div>
          <p class="iconTitle">完成</p>
        </li>
      </ul>
    </div>
    <div class="goodsList">
      <h5 class="goodsTitle">商品清单</h5>
      <el-table :data="[{},{}]" class="goodsTable">
        <el-table-column label="订单信息" width="485">
          <template>
            <div class="imgBox">
              <img src="@/assets/imgs/myOrder/allOrders/order-goods.png" alt>
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
        <el-table-column label="数量" width="170">×15</el-table-column>
        <el-table-column label="单价" width="132">￥606,868.00</el-table-column>
        <el-table-column label="总价" width="166">￥606,868.00</el-table-column>
      </el-table>
      <div class="goodsFooter">
        <p>
          <b class="totalGoods">
            共
            <span>15</span>件商品
          </b>
          <b>产品总价：</b>
          <span>询价中</span>
        </p>
        <p>
          <b>产品总体积：</b>
          <span>180m2</span>
        </p>
        <p>
          <b>优惠：</b>
          <span>-￥500.00</span>
        </p>
        <p>
          <b>运费：</b>
          <span>+￥100.00</span>
        </p>
        <p class="total">
          <b>实付总价：</b>
          <span>￥84,356.00</span>
        </p>
      </div>
    </div>
    <ul class="infoList clearfix">
      <li>
        <h4>收货信息</h4>
        <p>
          <b>收货人：</b>
          <span>岳云鹏</span>
        </p>
        <p>
          <b>联系方式：</b>
          <span>15810664988</span>
        </p>
        <p>
          <b>收获地址：</b>
          <span>北京市宣武区牛街183号3层406北京</span>
        </p>
      </li>
      <li>
        <h4>付款信息</h4>
        <p>
          <b>收货人：</b>
          <span>岳云鹏</span>
        </p>
        <p>
          <b>联系方式：</b>
          <span>15810664988</span>
        </p>
        <p>
          <b>收获地址：</b>
          <span>北京市宣武区牛街183号3层406北京市</span>
        </p>
      </li>
      <li>
        <h4>发票信息</h4>
        <p>
          <b>收货人：</b>
          <span>岳云鹏</span>
        </p>
        <p>
          <b>联系方式：</b>
          <span>15810664988</span>
        </p>
        <p>
          <b>收获地址：</b>
          <span>北京市宣武区牛街183号3层406北京市</span>
        </p>
        <p class="invLast">
          <b></b>
          <span>
            空调细且10台，水冷机组20台，空调细且10台，
            水冷机组20台。
          </span>
        </p>
      </li>
    </ul>
    <div class="inquiryInfo">
      <h4 class="infoTitle">询价信息</h4>
      <p>
        <b>项目名称：</b>
        <span>北京中铁三局中央空调改造（发生的诺夫）</span>
      </p>
      <p>
        <b>项目地址：</b>
        <span>北京市宣武区牛街183号3层406北京市宣武区牛街183号3层406</span>
      </p>
      <p>
        <b>询价人：</b>
        <span>岳云鹏</span>
      </p>
      <p>
        <b>询价人电话：</b>
        <span>15810664988</span>
      </p>
      <p class="requireInfo">
        <b>需求描述：</b>
        <span>本工程占地总面积3000平米，共22层，需要大型中央恐吓一阿婆122太，用力国际写字楼改造，本工程占地总面积3000平米，共22层，需要大型中央恐吓一阿婆122太，用力国际写字楼改造，本工程占地总面积3000平米，共22层，需要大型中央恐吓一阿婆122太，用力国际写字楼改造，本工程占地总面积3000平米，共22层，需要大型中央恐吓一阿婆122太，用力国际写字楼改造。</span>
      </p>
      <div class="requireImg">
        <b>需求图片：</b>
        <ul class="clearfix">
          <li>
            <img src="@/assets/imgs/myOrder/inquiryOrders/inquiry.png" alt>
          </li>
          <li>
            <img src="@/assets/imgs/myOrder/inquiryOrders/inquiry.png" alt>
          </li>
          <li>
            <img src="@/assets/imgs/myOrder/inquiryOrders/inquiry.png" alt>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderDetail",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.orderDetail {
  width: 1200px;
  margin-top: -30px;
  .brand {
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    span {
      cursor: pointer;
    }
    .orderNum {
      color: #14cfa0;
    }
    b {
      margin: 0 4px;
    }
  }
  .top {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    font-size: 16px;
    padding-left: 24px;
  }
  .statusStep {
    height: 260px;
    background-color: #fff;
    margin-top: 15px;
    .statusLeft {
      width: 360px;
      height: 100%;
      float: left;
      border-right: 1px solid #ececec;
      p {
        height: 50px;
        line-height: 50px;
        font-size: 12px;
        padding-left: 24px;
      }
      h3 {
        height: 158px;
        line-height: 158px;
        font-size: 30px;
        color: #14cfa0;
        text-align: center;
      }
    }
    .statusRight {
      height: 100%;
      width: 840px;
      padding: 68px 65px 0 65px;
      float: left;
      li {
        width: 90px;
        height: 135px;
        padding-top: 17px;
        float: left;
        .imgIcon {
          height: 32px;
          background: url(../../assets/imgs/myOrder/orderDetail/1080.png) no-repeat
            center;
          margin-bottom: 17px;
        }
        .imgIcon2 {
          background-image: url(../../assets/imgs/myOrder/orderDetail/1081.png);
        }
        .imgIcon3 {
          background-image: url(../../assets/imgs/myOrder/orderDetail/1082.png);
        }
        .imgIcon4 {
          background-image: url(../../assets/imgs/myOrder/orderDetail/1083.png);
        }
        .iconTitle {
          font-size: 14px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #999999;
        }
        .active{
          color: #333;
        }
        .date{
          line-height: 19px;
          text-align: center;
        }
      }
      li.line {
        width: 113px;
        .imgLine {
          height: 2px;
          width: 100%;
          margin-top: 15px;
          background: url(../../assets/imgs/myOrder/orderDetail/line1.png);
        }
        .gryLine {
          background-image: url(../../assets/imgs/myOrder/orderDetail/line2.png);
        }
      }
    }
  }
  .goodsList {
    margin-top: 15px;
    padding: 0 25px 8px 25px;
    min-height: 500px;
    background-color: #fff;
    .goodsTitle {
      height: 56px;
      line-height: 56px;
      font-size: 16px;
    }
    .goodsTable {
      width: 953px;
      margin: 0 auto;
      td {
        padding: 20px 0;
      }
      .el-table__body {
        border-left: 1px solid #ececec;
        border-right: 1px solid #ececec;
        table-layout: auto;
      }
      thead {
        .is-leaf {
          padding: 0;
          border: none;
          .cell {
            font-size: 14px;
            height: 45px;
            line-height: 45px;
            background-color: #f7f8f8;
          }
        }
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
    }
    .goodsFooter {
      width: 953px;
      margin: 0 auto;
      height: 194px;
      padding: 16px 30px 11px 0;
      text-align: right;
      p {
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        .totalGoods {
          margin-right: 35px;
          span {
            color: #ff0000;
            display: inline-block;
            margin: 0 2px;
          }
        }
        & > span {
          display: inline-block;
          width: 113px;
        }
      }
      .total {
        font-size: 18px;
        height: 45px;
        line-height: 45px;
        span {
          color: #ff0000;
        }
      }
    }
  }
  .infoList {
    height: 260px;
    margin: 15px 0;
    background-color: #fff;
    li {
      float: left;
      width: 400px;
      height: 100%;
      border-right: 1px solid #ececec;
      padding: 15px 0 0 44px;
      h4 {
        height: 64px;
        line-height: 64px;
        font-size: 16px;
      }
      p {
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        b {
          float: left;
          width: 60px;
          height: 25px;
          line-height: 25px;
          text-align: justify;
        }
        b:after {
          content: "";
          display: inline-block;
          width: 100%;
        }
        span {
          float: left;
        }
      }
      .invLast {
        span {
          height: 50px;
          width: 260px;
          color: #999999;
        }
      }
    }
    li:last-child {
      border: none;
    }
  }
  .inquiryInfo {
    height: 412px;
    background-color: #fff;
    padding: 10px 29px 0 23px;
    .infoTitle {
      font-size: 16px;
      height: 56px;
      line-height: 56px;
    }
    p,
    div {
      height: 34px;
      line-height: 34px;
      font-size: 12px;
      b {
        float: left;
        width: 72px;
        height: 34px;
        line-height: 34px;
      }
      span {
        float: left;
      }
    }
    .requireInfo {
      height: 72px;
      line-height: 18px;
      padding: 10px 0;
      b {
        float: left;
        width: 72px;
        height: 52px;
        line-height: 18px;
      }
      span {
        width: 880px;
      }
    }
    .requireImg {
      margin-top: 10px;
      ul > li {
        width: 100px;
        height: 100px;
        float: left;
        margin-right: 10px;
      }
      b {
        float: left;
        line-height: 18px;
      }
    }
  }
}
</style>