<template>
  <div class="FeedbackSucc">
    <div class="OrderTop">账户设置</div>
    <div class="Feedsucc">
      <div class="title">意见反馈</div>
      <div class="succ clearfix">
        <div class="left f-l">
          <img src="@/assets/imgs/myOrder/password/success.png"/>
        </div>
        <div class="right f-l">
          <p class="kui">反馈提交成功！</p>
          <p class="our">您的宝贵意见，是我们不断前行的动力。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedbackSucc"
};
</script>

<style lang="scss">
.FeedbackSucc {
  .OrderTop {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: white;
    padding: 0 20px;
    margin-bottom: 15px;
    font-size: 16px;
  }
  .Feedsucc {
    background: white;
    width: 1005px;
    min-height: 600px;
    padding: 0px 24px 50px 24px;
    color: #333333;
    .title {
      height: 56px;
      line-height: 56px;
      border-bottom: 1px solid #ececec;
      font-size: 14px;
    }
    .succ {
      width: 420px;
      margin: 0 auto;
      margin-top: 105px;
      .left {
        width: 80px;
        height: 80px;
        margin-right: 40px;
        img {
          max-width: 100%;
          display: block;
        }
      }
      .right {
        text-align: left;
        color: #333333;
        .kui {
          font-size: 30px;
          line-height: 29px;
          margin-bottom: 29px;
        }
        .our {
          font-size: 14px;
          line-height: 15px;
        }
      }
    }
  }
}
</style>
