<template>
  <div class="inquiryDetail">
    <p class="top">询价详情</p>
    <div class="goodsList">
      <p class="status">
        <span>询价单号：23432543543654</span>
        <span class="statusVal">
          状态：
          <b>询价中</b>
        </span>
      </p>
      <h5 class="goodsTitle">询价商品清单</h5>
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
      <div class="goodsCard">
        <h4 class="topTitle">
          使用优惠券
          <i class="el-icon-arrow-down"></i>
        </h4>
        <ul class="cards clearfix">
          <li>
            <div class="top">
              <p class="price">
                <span class="priceNum">￥2000</span>
                <span>满5000</span>
              </p>
              <p class="date">有效期至 2017-01-31</p>
            </div>
            <div class="bot">
              <span class="fir">通用满减券</span>
              <span>限品类</span>
            </div>
          </li>
          <li class="gryCard">
            <div class="top">
              <p class="price">
                <span class="priceNum">￥2000</span>
                <span>满5000</span>
              </p>
              <p class="date">有效期至 2017-01-31</p>
            </div>
            <div class="bot">
              <span class="fir">通用满减券</span>
              <span>限品类</span>
            </div>
          </li>
          <li class="activeCard">
            <div class="top">
              <p class="price">
                <span class="priceNum">￥2000</span>
                <span>满5000</span>
              </p>
              <p class="date">有效期至 2017-01-31</p>
            </div>
            <div class="bot">
              <span class="fir">通用满减券</span>
              <span>限品类</span>
            </div>
            <div class="position"></div>
          </li>
          <li>
            <div class="top">
              <p class="price">
                <span class="priceNum">￥2000</span>
                <span>满5000</span>
              </p>
              <p class="date">有效期至 2017-01-31</p>
            </div>
            <div class="bot">
              <span class="fir">通用满减券</span>
              <span>限品类</span>
            </div>
          </li>
          <li>
            <div class="top">
              <p class="price">
                <span class="priceNum">￥2000</span>
                <span>满5000</span>
              </p>
              <p class="date">有效期至 2017-01-31</p>
            </div>
            <div class="bot">
              <span class="fir">通用满减券</span>
              <span>限品类</span>
            </div>
          </li>
          <li>
            <div class="top">
              <p class="price">
                <span class="priceNum">￥2000</span>
                <span>满5000</span>
              </p>
              <p class="date">有效期至 2017-01-31</p>
            </div>
            <div class="bot">
              <span class="fir">通用满减券</span>
              <span>限品类</span>
            </div>
          </li>
          <li>
            <div class="top">
              <p class="price">
                <span class="priceNum">￥2000</span>
                <span>满5000</span>
              </p>
              <p class="date">有效期至 2017-01-31</p>
            </div>
            <div class="bot">
              <span class="fir">通用满减券</span>
              <span>限品类</span>
            </div>
          </li>
          <li>
            <div class="top">
              <p class="price">
                <span class="priceNum">￥2000</span>
                <span>满5000</span>
              </p>
              <p class="date">有效期至 2017-01-31</p>
            </div>
            <div class="bot">
              <span class="fir">通用满减券</span>
              <span>限品类</span>
            </div>
          </li>
        </ul>
        <div class="cardBtn">
          <span class="confirm">确定</span>
          <span>暂不使用</span>
        </div>
      </div>
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
          <span>询价中</span>
        </p>
      </div>
      <div class="goodsBtns">
        <span class="confirm">确认报价</span>
        <span class="reject">拒绝</span>
      </div>
    </div>
    <div class="receiveInfo">
      <h4 class="infoTitle">收货信息</h4>
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
        <span>北京市宣武区牛街183号3层406北京市宣武区牛街183号3层406</span>
      </p>
    </div>
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
  name: "inquiryDetail",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
.inquiryDetail {
  .top {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    font-size: 16px;
    padding-left: 24px;
  }
  .goodsList {
    margin-top: 15px;
    padding: 0 25px 22px 25px;
    min-height: 500px;
    background-color: #fff;
    .status {
      font-size: 14px;
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #ececec;
      .statusVal {
        margin-left: 77px;
      }
      b {
        color: #ff0000;
      }
    }
    .goodsTitle {
      height: 56px;
      line-height: 56px;
      font-size: 14px;
    }
    .goodsTable {
      width: 953px;
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
    .goodsCard {
      height: 396px;
      width: 953px;
      border: 1px solid #ececec;
      border-top: none;
      padding: 7px 26px 5px 26px;
      .topTitle {
        height: 39px;
        line-height: 39px;
        font-size: 16px;
        cursor: pointer;
        i {
          margin-left: 3px;
          font-size: 15px;
        }
      }
      .cards {
        li {
          background: url(../../assets/imgs/myOrder/inquiryDetail/bg_03.png)
            no-repeat top;
          float: left;
          width: 200px;
          height: 100px;
          border: 1px solid #51d0d8;
          border-top: none;
          margin-top: 21px;
          margin-right: 33px;
          padding-top: 3px;
          cursor: pointer;
          .top {
            height: 67px;
            padding: 8px 0 6px 18px;
            background-color: #51d0d8;
            .price {
              height: 34px;
              line-height: 34px;
              font-size: 12px;
              color: #fff;
              .priceNum {
                font-size: 28px;
                margin-left: -5px;
                margin-right: 8px;
              }
            }
            .date {
              font-size: 12px;
              color: #fff;
              height: 21px;
              line-height: 21px;
            }
          }
          .bot {
            padding-left: 18px;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            color: #51d0d8;
            .fir {
              margin-right: 15px;
            }
          }
        }
        & > li:nth-child(4),
        & > li:last-child {
          margin-right: 0;
        }
        li.gryCard {
          background-image: url(../../assets/imgs/myOrder/inquiryDetail/bg_04.png);
          border-color: #ccc;
          .top {
            background-color: #ccc;
          }
          .bot {
            color: #ccc;
          }
        }
        li.activeCard {
          padding-top: 0;
          background-image: none;
          border: 2px solid #ff0000;
          position: relative;
          .top {
            height: 68px;
          }
          .position {
            width: 35px;
            height: 32px;
            background: url(../../assets/imgs/myOrder/inquiryDetail/icon.png)
              no-repeat center;
            position: absolute;
            right: 0;
            bottom: 0;
          }
        }
      }
      .cardBtn {
        margin: 33px 0;
        span {
          display: inline-block;
          width: 100px;
          height: 35px;
          border: 1px solid #333;
          color: #333;
          text-align: center;
          font-size: 14px;
          line-height: 33px;
          cursor: pointer;
        }
        .confirm {
          border: none;
          margin-right: 10px;
          background-color: #ff0000;
          color: #fff;
        }
      }
    }
    .goodsFooter {
      width: 953px;
      height: 194px;
      padding: 16px 30px 11px 0;
      border: 1px solid #ececec;
      border-top: none;
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
    .goodsBtns {
      margin-top: 22px;
      height: 45px;
      line-height: 45px;
      text-align: right;
      span {
        display: inline-block;
        width: 125px;
        height: 45px;
        border: 1px solid black;
        text-align: center;
        font-size: 18px;
        cursor: pointer;
      }
      .confirm {
        border: none;
        background-color: #14cfa0;
        color: #fff;
        margin-right: 10px;
      }
    }
  }
  .receiveInfo {
    height: 190px;
    margin: 15px 0;
    background-color: #fff;
    padding: 10px 0 0 23px;
    .infoTitle {
      font-size: 16px;
      height: 64px;
      line-height: 64px;
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