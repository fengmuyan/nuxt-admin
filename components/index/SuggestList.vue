<template>
  <div class="SuggestList">
    <div class="container clearfix">
      <dl class="item clearfix" v-for="(item,index) in suggestList" :key="index">
        <dt>
          <img v-lazy="item.bkImg" alt>
          <div class="position">
            <h3>{{item.bkTitle}}</h3>
            <h4>{{item.bkType}}</h4>
            <h4>{{item.bkDel}}</h4>
          </div>
        </dt>
        <dd v-for="(v,i) in item.goods" :key="i">
          <img v-lazy="v.src" alt>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuggestList",
  data() {
    return {
      suggestList: [
        {
          bkImg: require("@/assets/imgs/homepage/dt01.png"),
          bkTitle: "限时满减",
          bkType: "空调类产品",
          bkDel: "全场满5000减500",
          goods: [
            { src: require("@/assets/imgs/homepage/dd01.png") },
            { src: require("@/assets/imgs/homepage/dd01.png") },
            { src: require("@/assets/imgs/homepage/dd01.png") },
            { src: require("@/assets/imgs/homepage/dd01.png") }
          ]
        },
        {
          bkImg: require("@/assets/imgs/homepage/dt01.png"),
          bkTitle: "限时满减",
          bkType: "空调类产品",
          bkDel: "全场满5000减500",
          goods: [
            { src: require("@/assets/imgs/homepage/dd01.png") },
            { src: require("@/assets/imgs/homepage/dd01.png") },
            { src: require("@/assets/imgs/homepage/dd01.png") },
            { src: require("@/assets/imgs/homepage/dd01.png") }
          ]
        },
        {
          bkImg: require("@/assets/imgs/homepage/dt01.png"),
          bkTitle: "限时满减",
          bkType: "空调类产品",
          bkDel: "全场满5000减500",
          goods: [
            { src: require("@/assets/imgs/homepage/dd01.png") },
            { src: require("@/assets/imgs/homepage/dd01.png") },
            { src: require("@/assets/imgs/homepage/dd01.png") },
            { src: require("@/assets/imgs/homepage/dd01.png") }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.SuggestList {
  height: 250px;
  margin-bottom: 18px;
  .container {
    .item {
      width: 390px;
      height: 250px;
      float: left;
      dt,
      dd {
        float: left;
        height: 125px;
        img {
          float: left;
        }
      }
      dt {
        width: 260px;
        position: relative;
        .position{
          position: absolute;
          width:100%;
          height: 100%;
          padding-left: 20px;
          h3{
            height: 56px;
            line-height: 56px;
            margin-top: 4px;
            font-size: 24px;
            color:#fff;
          }
          h4{
            height: 26px;
            line-height: 26px;
            font-size: 16px;
            color:#fff;
          }
        }
      }
      dd {
        width: 130px;
      }
    }
    & > dl:nth-child(2) {
      margin: 0 15px;
    }
  }
}
</style>
