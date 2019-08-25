<template>
  <div class="BrandList">
    <div class="container">
      <div class="brand clearfix">
        <div class="left">
          <img src="@/assets/imgs/homepage/brand_title.png" alt>
        </div>
        <ul class="right">
          <li v-for="(item,index) in brandList" :key="index">
            <img v-lazy="item.src" alt>
          </li>
        </ul>
      </div>
      <div class="banner">
        <img src="@/assets/imgs/homepage/banner.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrandList",
  data() {
    return {
      brandList: [
        { src: require("@/assets/imgs/homepage/brand01.png") },
        { src: require("@/assets/imgs/homepage/brand01.png") },
        { src: require("@/assets/imgs/homepage/brand01.png") },
        { src: require("@/assets/imgs/homepage/brand01.png") },
        { src: require("@/assets/imgs/homepage/brand01.png") },
        { src: require("@/assets/imgs/homepage/brand01.png") },
        { src: require("@/assets/imgs/homepage/brand01.png") },
        { src: require("@/assets/imgs/homepage/brand01.png") },
        { src: require("@/assets/imgs/homepage/brand01.png") },
        { src: require("@/assets/imgs/homepage/brand01.png") }
      ]
    };
  },
};
</script>
<style lang="scss">
.BrandList {
  height: 360px;
  background-color: #fff;
  padding: 30px 0;
  .brand {
    height: 188px;
    border: 1px solid #ececec;
    .left {
      float: left;
      width: 257px;
      height: 188px;
    }
    .right {
      float: right;
      width: 940px;
      li {
        float: left;
        img {
          float: left;
        }
      }
    }
  }
  .banner {
    margin-top: 30px;
    height: 137px;
  }
}
</style>
