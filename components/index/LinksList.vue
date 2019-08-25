<template>
  <div class="LinksList">
    <div class="container">
      <h3 class="title">友情连接</h3>
      <ul class="links clearfix">
        <li v-for="(item,index) in linksList" :key="index">
          <img v-lazy="item.src" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinksList",
  data() {
    return {
      linksList: [
        { src: require("@/assets/imgs/homepage/link02.png") },
        { src: require("@/assets/imgs/homepage/link02.png") },
        { src: require("@/assets/imgs/homepage/link02.png") },
        { src: require("@/assets/imgs/homepage/link01.png") },
        { src: require("@/assets/imgs/homepage/link01.png") },
        { src: require("@/assets/imgs/homepage/link02.png") },
        { src: require("@/assets/imgs/homepage/link02.png") },
        { src: require("@/assets/imgs/homepage/link02.png") },
        { src: require("@/assets/imgs/homepage/link02.png") },
        { src: require("@/assets/imgs/homepage/link02.png") },
        { src: require("@/assets/imgs/homepage/link01.png") },
        { src: require("@/assets/imgs/homepage/link02.png") },
        { src: require("@/assets/imgs/homepage/link01.png") },
        { src: require("@/assets/imgs/homepage/link02.png") },
      ]
    };
  }
};
</script>
<style lang="scss">
.LinksList {
  height: 232px;
  padding: 48px 0 30px 0;
  background-color: #fff;
  .container {
    .title {
      height: 30px;
      line-height: 30px;
      margin-bottom: 46px;
      font-size: 22px;
      color:black;
    }
    .links {
      height: 138px;
      padding: 0 25px;
      li{
        float: left;
        margin-right: 40px;
        margin-bottom: 18px;
        width:130px;
        img{
          float: left;
        }
      }
      &>li:nth-child(7), &>li:nth-child(14){
        margin-right: 0px;
      }
    }
  }
}
</style>
