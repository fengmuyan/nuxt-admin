<template>
  <div class="UserCenter">
    <div class="top clearfix">
      <div class="left">
        <div class="imgLeft">
          <img src="@/assets/imgs/myOrder/userCenter/user.png" alt>
        </div>
        <div class="contentRight">
          <h4>duoduozhang</h4>
          <p>欢迎来到居想网！</p>
          <span>
            <b>V8 会员</b>
            <span>会员特权</span>
          </span>
        </div>
      </div>
      <ul class="right clearfix">
        <li>
          <h3>2,046.00</h3>
          <p>累积消费</p>
        </li>
        <li>
          <h3>2,046.00</h3>
          <p>累积消费</p>
        </li>
        <li>
          <h3>2,046.00</h3>
          <p>累积消费</p>
        </li>
      </ul>
    </div>
    <div class="myOrder clearfix">
      <div class="left">
        <h4>我的订单</h4>
        <ul class="clearfix">
          <li>
            <div>
              <img src="@/assets/imgs/myOrder/userCenter/user-icon1.png" alt>
            </div>
            <p>询价中</p>
            <span class="position">16</span>
          </li>
          <li>
            <div>
              <img src="@/assets/imgs/myOrder/userCenter/user-icon2.png" alt>
            </div>
            <p>询价中</p>
            <span class="position">16</span>
          </li>
          <li>
            <div>
              <img src="@/assets/imgs/myOrder/userCenter/user-icon3.png" alt>
            </div>
            <p>询价中</p>
            <span class="position">16</span>
          </li>
          <li>
            <div>
              <img src="@/assets/imgs/myOrder/userCenter/user-icon4.png" alt>
            </div>
            <p>询价中</p>
            <span class="position">16</span>
          </li>
          <li>
            <div>
              <img src="@/assets/imgs/myOrder/userCenter/user-icon5.png" alt>
            </div>
            <p>询价中</p>
            <span class="position">16</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <h4>我的销售经理</h4>
        <div class="userImg">
          <img src="@/assets/imgs/myOrder/userCenter/user2.png" alt>
        </div>
        <p class="mid">
          波波杨
          <span>销售经理</span>
        </p>
        <p class="bot">
          所属公司：巨象高科
          <br>联系电话：13823457567
        </p>
      </div>
    </div>
    <div class="recentOrders">
      <h4>近期订单</h4>
      <ul class="goodsList">
        <li class="clearfix">
          <div class="goodsImg">
            <img src="@/assets/imgs/myOrder/userCenter/goods.png" alt>
          </div>
          <div class="content">
            <p>订单编号：JCI45254265654654</p>
            <p>订单时间：2019-03-14 12:34:56</p>
            <p>
              产品数量：共
              <span>20</span> 件
            </p>
          </div>
          <div class="toDetail">查看详情</div>
        </li>
        <li class="clearfix">
          <div class="goodsImg">
            <img src="@/assets/imgs/myOrder/userCenter/goods.png" alt>
          </div>
          <div class="content">
            <p>订单编号：JCI45254265654654</p>
            <p>订单时间：2019-03-14 12:34:56</p>
            <p>
              产品数量：共
              <span>20</span> 件
            </p>
          </div>
          <div class="toDetail">查看详情</div>
        </li>
        <li class="clearfix">
          <div class="goodsImg">
            <img src="@/assets/imgs/myOrder/userCenter/goods.png" alt>
          </div>
          <div class="content">
            <p>订单编号：JCI45254265654654</p>
            <p>订单时间：2019-03-14 12:34:56</p>
            <p>
              产品数量：共
              <span>20</span> 件
            </p>
          </div>
          <div class="toDetail">查看详情</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserCenter"
};
</script>

<style lang="scss">
.UserCenter {
  .top {
    width: 100%;
    height: 188px;
    background-color: #fff;
    margin-bottom: 15px;
    .left {
      float: left;
      width: 350px;
      height: 100%;
      background: url(../../assets/imgs/myOrder/userCenter/user-bg.png) no-repeat
        center 0;
      padding: 49px 0 49px 39px;
      .imgLeft {
        width: 90px;
        height: 90px;
        background-color: #fff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
      }
      .contentRight {
        float: left;
        padding-left: 31px;
        width: 220px;
        h4 {
          font-size: 18px;
          color: #333;
          font-weight: bold;
          height: 24px;
          line-height: 24px;
        }
        p {
          font-size: 14px;
          color: #333;
          height: 25px;
          line-height: 25px;
        }
        span {
          display: block;
          padding-top: 10px;
          b {
            display: inline-block;
            width: 83px;
            height: 23px;
            background-color: #ebc82c;
            border-radius: 13px;
            text-align: center;
            color: #fff;
            font-size: 15px;
          }
          span {
            font-size: 12px;
            color: #ebc82c;
            cursor: pointer;
            display: inline-block;
            text-decoration: underline;
            margin-left: 14px;
          }
        }
      }
    }
    .right {
      width: 655px;
      float: left;
      height: 100%;
      li {
        width: 33.3%;
        height: 100%;
        float: left;
        text-align: center;
        padding-top: 45px;
        h3 {
          font-size: 40px;
          color: #14cfa0;
          height: 52px;
          line-height: 52px;
        }
        p {
          font-size: 14px;
          height: 35px;
          line-height: 35px;
        }
      }
    }
  }
  .myOrder {
    width: 100%;
    height: 248px;
    margin-bottom: 15px;
    .left {
      width: 704px;
      height: 100%;
      background-color: #fff;
      margin-right: 15px;
      float: left;
      h4 {
        font-size: 16px;
        color: #333;
        height: 63px;
        line-height: 63px;
        padding-left: 25px;
      }
      ul {
        padding: 0 37px;
        height: 185px;
        li {
          width: 126px;
          height: 100%;
          float: left;
          padding-top: 29px;
          position: relative;
          div {
            width: 51px;
            height: 51px;
            margin: 0 auto;
            img {
              float: left;
            }
          }
          p {
            text-align: center;
            font-size: 14px;
            color: #333;
            height: 64px;
            line-height: 64px;
          }
          span.position {
            width: 30px;
            height: 30px;
            line-height: 28px;
            border: 1px solid #ff0000;
            border-radius: 50%;
            position: absolute;
            top: 13px;
            left: 72px;
            text-align: center;
            color: #ff0000;
            font-size: 16px;
          }
        }
      }
    }
    .right {
      float: left;
      width: 286px;
      height: 100%;
      background-color: #fff;
      h4 {
        font-size: 16px;
        color: #333;
        height: 59px;
        line-height: 59px;
        padding-left: 24px;
      }
      .userImg {
        height: 70px;
        text-align: center;
      }
      .mid {
        font-size: 18px;
        height: 18px;
        line-height: 18px;
        margin-top: 18px;
        margin-bottom: 23px;
        color: #333;
        text-align: center;
        span {
          font-size: 14px;
          color: #999;
          margin-left: 12px;
        }
      }
      .bot {
        font-size: 12px;
        line-height: 22px;
        width: 164px;
        padding-left: 26px;
      }
    }
  }
  .recentOrders {
    height: 504px;
    background-color: #fff;
    padding: 0 25px 25px 25px;
    h4 {
      height: 61px;
      line-height: 61px;
      font-size: 16px;
      color: #333;
    }
    .goodsList {
      li {
        height: 140px;
        border: 1px solid #ececec;
        padding: 20px 28px;
        .goodsImg {
          width: 100px;
          height: 100px;
          float: left;
          .img {
            float: left;
          }
        }
        .content {
          width: 200px;
          float: left;
          padding-top: 13px;
          padding-left: 18px;
          p {
            font-size: 12px;
            height: 24px;
            line-height: 24px;
            span {
              color: #ff0000;
            }
          }
        }
        .toDetail {
          width: 178px;
          float: right;
          line-height: 100px;
          text-align: center;
          font-size: 12px;
          color: #333;
          cursor: pointer;
          &:hover {
            color: #14cfa0;
          }
        }
      }
      & > li:nth-child(2) {
        border-top: none;
        border-bottom: none;
      }
    }
  }
}
</style>