<template>
  <div class="ticketPaper">
    <a href="###" class="del">
      <i class="el-icon-delete" @click="delets"></i>
    </a>
    <div
      class="paper"
      :class="{ 'paper01': ticketPaper.status==1, 'paper02': ticketPaper.status==2, 'paper03': ticketPaper.status==3 }"
    >
      <p class="money">
        <span>
          <b class="f">¥</b>
          {{ticketPaper.money}}
        </span>
      </p>
      <p class="tip">
        满减券
        <span>[ {{ticketPaper.userIf}} ]</span>
      </p>
      <p class="date">有效期至{{ticketPaper.dataTime}}</p>
    </div>
    <div class="downText">
      <p>限品类：{{ticketPaper.downtext1}}</p>
      <p>限使用：{{ticketPaper.downtext2}}</p>
      <p>券编号：{{ticketPaper.downtext3}}</p>
      <el-button type="success" plain v-if="ticketPaper.status!=3" @click="toUse">立即使用</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ticketPaper",
  props: {
    ticketPaper: {}
  },
  data() {
    return {};
  },
  methods: {
    toUse: function() {
      this.$emit("toUse", this.ticketPaper);
    },
    delets: function() {
      this.$emit("delets", this.ticketPaper);
    }
  }
};
</script>
<style lang="scss" scoped>
.ticketPaper {
  position: relative;
  width: 220px;
  background: #f2faf5;
  .paper {
    text-align: center;
    padding: 22px 25px 0;
    height: 168px;
  }
  .paper01 {
    background: url(../../assets/imgs/myOrder/tickets/ticket1.png) no-repeat center 0;
  }
  .paper02 {
    background: url(../../assets/imgs/myOrder/tickets/ticket2.png) no-repeat 0 0;
  }
  .paper03 {
    background: url(../../assets/imgs/myOrder/tickets/ticket3.png) no-repeat 0 0;
  }
  .paper04 {
    background: url(../../assets/imgs/myOrder/tickets/ticket1.png) no-repeat 0 0;
  }
  .money span {
    padding-left: 16px;
    position: relative;
    font-size: 44px;
    font-weight: bold;
    color: #fff;
    font-family: "Arial";
  }
  .money .f {
    position: absolute;
    top: 6px;
    left: 0;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
  .tip {
    font-size: 16px;
    color: #fff;
    margin-top: 10px;
  }
  .tip span {
    margin-left: 6px;
    font-size: 12px;
  }

  .date {
    height: 25px;
    width: 145px;
    line-height: 23px;
    font-size: 12px;
    border: 1px solid #fff;
    border-radius: 20px;
    color: #fff;
    text-align: center;
    margin: 15px auto 0;
  }
  .downText {
    font-size: 12px;
    padding: 25px 20px;
  }
  .downText p {
    margin-bottom: 10px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
  }
  .del {
    display: none;
    position: absolute;
    z-index: 9;
    right: -1px;
    top: -1px;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    background: rgba(0, 0, 0, 0.2);
    i {
      font-size: 24px;
      color: #fff;
      cursor: pointer;
    }
  }

  &:hover .del {
    display: block;
  }
  .el-button {
    border-color: #017a7b;
    height: 25px;
    line-height: 25px;
    width: 90px;
    border-radius: 20px;
    font-size: 12px;
    background: #f2faf5;
    color: #017a7b;
    margin: 25px auto 0;
    cursor: pointer;
  }
}
.ServiceBanner {
  height: 450px;
  background: url(../../assets/imgs/serviceProducts/serviceBanner.png) no-repeat
    center 0;
}
</style>
