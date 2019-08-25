<template>
  <div class="caseList bgGrey">
    <div class="banner"></div>
    <div style="line-height:60px;height:60px;background:pink;text-align:center;">面包屑</div>
    <div class="container clearfix">
      <div class="caseCheck box-shadow bgWhite f-l">
        <div class="box">
          <h3 class="typeTitle">产品类别</h3>
          <ul>
            <li
              :class="{active:currentIndex1==i}"
              @click="checkClick1(v,i)"
              v-for="(v,i) in types"
              :key="i"
            >{{v}}</li>
          </ul>
        </div>
        <div class="box">
          <h3 class="typeTitle">品牌</h3>
          <ul>
            <li
              :class="{active:currentIndex2==index}"
              @click="checkClick2(item,index)"
              v-for="(item,index) in brands"
              :key="index"
            >{{item}}</li>
          </ul>
        </div>
      </div>
      <div class="caseList-r box-shadow bgWhite">
        <div v-for="(item,index) in caseList" :key="index" @click="toDetail($event)">
          <h3 class="conTitle">{{item.title}}</h3>
          <p class="conText">{{item.describe}}</p>
          <img class="img-response" :src="item.imgSrc" alt>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "caseList",
  layout: "default",

  components: {},

  data() {
    return {
      currentIndex1: "",
      currentIndex2: "",
      types: [
        "全部",
        "冷却塔设备",
        "净化产品",
        "末端产品",
        "水冷冷水机组",
        "风冷冷水机组",
        "多联机"
      ],
      brands: ["全部", "开昨", "海林", "日立", "三星", "格力", "美的"],
      caseList: [
        {
          title: "首都机场T2航站楼",
          describe:
            "北京首都机场T2航站楼采用的共计13500RT的溴化锂冷水机组9台和全部末端空调设备及空调自控系统。",
          imgSrc: require("@/assets/imgs/casePic/case-pic1.png")
        },
        {
          title: "上海虹桥高商写字楼",
          describe:
            "北京首都机场T2航站楼采用的共计13500RT的溴化锂冷水机组9台和全部末端空调设备及空调自控系统。",
          imgSrc: require("@/assets/imgs/casePic/case-pic2.png")
        },
        {
          title: "首都机场T2航站楼",
          describe:
            "北京首都机场T2航站楼采用的共计13500RT的溴化锂冷水机组9台和全部末端空调设备及空调自控系统。",
          imgSrc: require("@/assets/imgs/casePic/case-pic1.png")
        },
        {
          title: "上海虹桥高商写字楼",
          describe:
            "北京首都机场T2航站楼采用的共计13500RT的溴化锂冷水机组9台和全部末端空调设备及空调自控系统。",
          imgSrc: require("@/assets/imgs/casePic/case-pic2.png")
        }
      ]
    };
  },
  methods: {
    checkClick1(v, i) {
      this.currentIndex1 = i;
    },
    checkClick2(v, i) {
      this.currentIndex2 = i;
    },
    toDetail(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
.caseList {
  .banner {
    height: 450px;
    background: url(../../assets/imgs/casePic/caseBanner.png) no-repeat center 0;
  }

  .caseCheck {
    width: 190px;

    .typeTitle {
      height: 40px;
      line-height: 40px;
      padding-left: 30px;
      color: #fff;
      background: #3b3b5b;
    }
    li {
      cursor: pointer;
      padding-left: 30px;
      height: 40px;
      line-height: 40px;
    }
    li.active {
      color: #14cfa0;
    }
  }
  .caseList-r {
    margin-bottom: 100px;
    padding: 30px 44px;
    margin-left: 210px;
    .conText {
      font-size: 14px;
      color: #999999;
      margin-bottom: 20px;
    }
    .conTitle {
      margin-bottom: 20px;
      font-size: 20px;
    }
    .img-response {
      margin-bottom: 40px;
    }
  }
}
</style>