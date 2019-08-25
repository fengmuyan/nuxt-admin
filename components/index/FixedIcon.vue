<template>
  <div class="FixedIcon">
    <ul class="fixedBox">
      <li>
        <i class="el-icon-service"></i>
        <p>在线咨询</p>
      </li>
      <li>
        <i class="el-icon-phone"></i>
        <p>客服热线</p>
      </li>
      <li v-show="scrollTop>800" @click="gotop">
        <i class="el-icon-arrow-up"></i>
        <p>返回顶部</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FixedIcon",
  computed: {
    ...mapGetters(["scrollTop"])
  },
  methods: {
    gotop() {
      if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0;
      } else if (document.body.scrollTop) {
        document.body.scrollTop = 0;
      } else {
        window.pageYOffset = 0;
      }
    }
  }
};
</script>
<style lang="scss">
.FixedIcon {
  .fixedBox {
    position: fixed;
    width: 80px;
    height: 270px;
    top: 364px;
    right: 30px;
    z-index: 600;

    & > li {
      border: 1px solid #cbcbcb;
      border-top: none;
      height: 54px;
      width: 56px;
      padding: 18px 11px 16px 11px;
      background-color: #fff;
      cursor: pointer;
      i {
        display: block;
        color: #656565;
        text-align: center;
        font-size: 34px;
        margin-bottom: 8px;
      }
      p {
        color: #000;
        font-size: 12px;
        text-align: center;
      }
    }
    & > li:first-child {
      border-top: 1px solid #cbcbcb;
    }
  }
}
</style>
