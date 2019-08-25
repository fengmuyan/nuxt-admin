<template>
  <div class="shopping">
    <div class="toptype">
      <div class="container">
        <span class="topname">全部商品分类</span>
      </div>
    </div>
    <div class="container">
      <!-- 面包屑 -->
      <shop-bread :dynamic="visitedViews"></shop-bread>
      <!-- 筛选条件 -->
      <div class="sfilter">
        <!-- 品牌 -->
        <div class="brand">
          <div class="filtname">品牌</div>
          <!-- 品牌单选 -->
          <div class="imglogo" v-if="isjudge">
            <ul v-show="logo">
              <li
                v-for="(item,index) in brandImp"
                :key="index"
                @click="singleCli(item,index)"
                :class="actIndex===index?'av-selected':''"
              >
                <img v-lazy="item.img" alt>
              </li>
            </ul>
            <ul v-show="!logo">
              <li
                v-for="(item,index) in brandImg"
                :key="index"
                @click="singleCli(item,index)"
                :class="actIndex===index?'av-selected':''"
              >
                <img v-lazy="item.img" alt>
              </li>
            </ul>
          </div>
          <!-- 品牌多选 -->
          <div class="imglogo" v-else>
            <ul>
              <li
                v-for="(item,index) in brandImg"
                :key="index"
                @click="handleCli(item,index)"
                :class="arr.includes(index)?'av-selected':''"
              >
                <img v-lazy="item.img" alt>
                <i class="el-icon-circle-close el-icon--top" v-if="arr.includes(index)"></i>
              </li>
            </ul>
            <div class="many">
              <button>确定</button>
              <button @click="getclose">取消</button>
            </div>
          </div>
          <div class="smore">
            <button @click="getMore" v-show="logo">
              更多
              <i class="el-icon-arrow-down el-icon--right"></i>
            </button>
            <button @click="getMore" v-show="!logo">
              收起
              <i class="el-icon-arrow-up el-icon--right"></i>
            </button>
            <button @click="getMany">
              多选
              <i class="el-icon-plus el-icon--right"></i>
            </button>
          </div>
        </div>
        <!-- 除品牌外其余列表 -->
        <div class="noise" v-for="(item,index) in importArr" :key="index">
          <div class="filtname">{{item.name}}</div>
          <ul class="fillist">
            <li
              v-for="(child,ind) in item.value"
              :key="ind"
              @click="otherList(item.name,child,index)"
            >{{child}}</li>
          </ul>
        </div>
        <!-- 点击更多筛选出现 -->
        <div v-show="ismore">
          <div class="noise" v-for="(item,index) in otherArr" :key="index">
            <div class="filtname">{{item.name}}</div>
            <ul class="fillist">
              <li v-for="(child,ind) in item.value" :key="ind" @click="otherList(item.name,child,index+5)">{{child}}</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 更多筛选按钮 -->
      <div class="more">
        <span @click="moreChange" v-show="!ismore">
          更多筛选
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <span @click="moreChange" v-show="ismore">
          收起筛选
          <i class="el-icon-arrow-up el-icon--right"></i>
        </span>
      </div>
      <!-- 商品列表 -->
      <div class="scontent">
        <div class="left">
          <div class="title">推荐商品</div>
          <div class="hot" v-for="(i,index) in recommendArr" :key="index">
            <div class="picture">
              <img v-lazy="i.img" alt>
            </div>
            <div class="item">{{i.name}}</div>
          </div>
        </div>
        <div class="right">
          <el-tabs type="border-card" v-model="activeName">
            <el-tab-pane label="综合" name="gentle">
              <div class="con">
                <shop-list
                  v-for="(item,index) in productList"
                  :key="index"
                  :dataItem="item"
                  @getInquery="getInquery"
                ></shop-list>
              </div>
            </el-tab-pane>
            <el-tab-pane label="销量" name="sale">
              <div class="con">
              </div>
            </el-tab-pane>
            <el-tab-pane label="上架时间" name="time">
              <div class="con">hy</div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShopBread from "~/components/shopping/shopBread";
import ShopList from "~/components/shopping/shoplist";
import { mapGetters } from "vuex";
export default {
  name: "shopping",
  components: {
    ShopBread,
    ShopList
  },
  data() {
    return {
      dynamicTags: [
        { name: "噪音", value: "15-20" },
        { name: "风量", value: "15-20" }
      ],
      condition: [
        { name: "制冷量（KW）", value: ["1-89", "1-89", "1-89", "其他"] },
        {
          name: "制热量（KW）",
          value: ["8-15", "1-2.0", "3-6", "4-21", "其他"]
        },
        { name: "噪音（KW）", value: ["1-89", "1-89", "1-89"] },
        { name: "电功率（KW）", value: ["1-89", "1-89", "1-89"] },
        {
          name: "风量（KW）",
          value: [
            "200-250",
            "230-250",
            "100-120",
            "320-330",
            "350-370",
            "210-220",
            "其他"
          ]
        },
        { name: "余压（KW）", value: ["1-89", "1-89", "1-89"] },
        { name: "制冷量（KW）", value: ["1-89", "1-89", "1-89"] },
        { name: "制冷量（KW）", value: ["1-89", "1-89", "1-89", "其他"] }
      ],
      brandImg: [
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo1.png"), name: "格利" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "美的" },
        { id: 1, img: require("@/assets/imgs/shopping/logo1.png"), name: "泰森" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "厨房" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "状态狂" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "美丽" },
        { id: 1, img: require("@/assets/imgs/shopping/logo1.png"), name: "头发" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "形态" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "丰富" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo1.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo1.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo1.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo1.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" },
        { id: 1, img: require("@/assets/imgs/shopping/logo.png"), name: "日立" }
      ],
      logo: true,
      ismore: false,
      isjudge: true,
      // 筛选数组
      importArr: [],
      otherArr: [],
      // 品牌单选多选class
      arr: [],
      actIndex: "",
      brandImp: [],
      // 产品列表
      productList: [
        {
          img: require("@/assets/imgs/shopping/list.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/list.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/list.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/list.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/list.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/list.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/list.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/list.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/list.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        }
      ],
      recommendArr: [
        {
          img: require("@/assets/imgs/shopping/hot.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/hot.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/hot.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/hot.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/hot.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        },
        {
          img: require("@/assets/imgs/shopping/hot.jpg"),
          name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
        }
      ],
      // tab切换
      activeName: "gentle"
    };
  },
  created() {
    this.getInit();
  },
  computed: {
    ...mapGetters(["visitedViews"])
  },
  methods: {
    getInit() {
      this.importArr = this.condition.slice(0, 5);
      this.otherArr = this.condition.slice(5, this.condition.length);
      this.brandImp = this.brandImg.slice(0, 9);
    },
    // 品牌更多收起
    getMore() {
      this.logo = !this.logo;
      this.actIndex = "";
    },
    // 品牌多选按钮
    getMany() {
      this.isjudge = false;
      this.logo = true;
    },
    // 品牌多选取消按钮
    getclose() {
      this.isjudge = true;
      this.arr = [];
    },
    // 品牌多选
    handleCli(item, index) {
      if (this.arr.includes(index)) {
        this.arr = this.arr.filter(function(ele) {
          return ele !== index;
        });
      } else {
        this.arr.push(index);
      }
    },
    // 品牌单选
    singleCli(item, index) {
      this.actIndex = index;
    },
    // 其他列表点击
    otherList(name, value, index) {
      let obj = { name: name, value: value, index: index };
      this.$store.dispatch("saveData", obj);
    },
    // 更多筛选
    moreChange() {
      this.ismore = !this.ismore;
    },
    // 子组件返回来值后进行操作
    getInquery(data) {
      this.$router.push({ path: "/quickInquiry", param: { data: data } });
    }
  }
};
</script>

<style lang="scss">
.shopping {
  background: #ffffff;
  .toptype {
    width: 100%;
    height: 45px;
    border-bottom: 2px solid rgb(20, 208, 160);
    .topname {
      width: 200px;
      height: 45px;
      line-height: 45px;
      text-align: center;
      background: #14d0a0;
      color: #f3fcf9;
      display: inline-block;
      font-size: 16px;
    }
  }
  .container {
    .sfilter {
      // height: 334px;
      border: 1px solid #ececec;
      border-bottom: none;
      font-size: 12px;
      overflow: hidden;
      .filtname {
        margin-left: 20px;
        line-height: 34px;
        width: 140px;
        color: #999999;
        float: left;
      }
      .brand {
        // height: 124px;
        border-bottom: 1px solid #ececec;
        overflow: hidden;
        .filtname {
          margin-top: 15px;
        }
        .imglogo {
          width: 885px;
          float: left;
          ul {
            max-height: 250px;
            overflow-y: auto;
            padding: 10px 0px;
            li {
              width: 110px;
              height: 50px;
              float: left;
              margin-left: 1px;
              margin-right: 15px;
              margin-bottom: 5px;
              position: relative;
              img {
                width: 100%;
                display: block;
              }
              &:hover {
                box-shadow: 0px 0px 0px 1px #e1e1e1;
              }
              i {
                position: absolute;
                display: inline-block;
                background-position: 0 0;
                font-size: 1px;
                height: 15px;
                width: 15px;
                visibility: visible;
                right: 0;
                top: 5px;
              }
            }
            .av-selected {
              box-shadow: 0px 0px 0px 1px rgb(20, 208, 160);
            }
          }
          .many {
            height: 40px;
            width: 100%;
            text-align: center;
            line-height: 40px;
            button {
              width: 48px;
              height: 20px;
              border: 1px solid #ececec;
              background: #fff;
              margin-right: 10px;
              padding: 0px;
              &:hover {
                color: rgb(20, 208, 160);
              }
            }
          }
        }
        .imglogo ul::-webkit-scrollbar {
          width: 3px;
        }
        .imglogo ul::-webkit-scrollbar-track {
          background-color: #ffffff;
          -webkit-border-radius: 2em;
          -moz-border-radius: 2em;
          border-radius: 2em;
        }
        .imglogo ul::-webkit-scrollbar-thumb {
          background-color: #ffffff;
          -webkit-border-radius: 2em;
          -moz-border-radius: 2em;
          border-radius: 2em;
        }
        .smore {
          float: left;
          width: 150px;
          text-align: center;
          button {
            margin-top: 15px;
            width: 50px;
            height: 22px;
            border: 1px solid #ececec;
            background: #ffffff;
            margin-right: 10px;
            padding: 0px;
            line-height: 22px;
            text-align: center;
            font-size: 12px;
            color: #333333;
            &:hover {
              color: rgb(20, 208, 160);
            }
          }
        }
      }
      .noise {
        height: 34px;
        line-height: 34px;
        border-bottom: 1px solid #ececec;
        overflow: hidden;
        .fillist {
          li {
            padding-right: 40px;
            float: left;
            color: #333333;
            cursor: pointer;
            &:hover {
              color: #14d0a0;
            }
          }
        }
      }
    }
    .more {
      width: 76px;
      height: 22px;
      line-height: 22px;
      border: 1px solid #ececec;
      margin: 0 auto;
      margin-bottom: 16px;
      border-top: none;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
    }
    .scontent {
      overflow: hidden;
      padding-bottom: 30px;
      .left {
        width: 200px;
        border: 1px solid #ececec;
        margin-right: 11px;
        float: left;
        .title {
          height: 50px;
          line-height: 50px;
          width: 100%;
          text-align: center;
          font-size: 16px;
          color: #333333;
        }
        .hot {
          width: 160px;
          margin: 0 auto;
          height: 225px;
          .picture {
            height: 160px;
            width: 100%;
            img {
              max-width: 100%;
              display: block;
            }
          }
          .item {
            height: 65px;
            font-size: 12px;
            color: #333333;
            padding: 14px 0px 20px 0px;
          }
        }
      }
      .right {
        float: left;
        width: 989px;
        .el-tabs--border-card {
          border: none;
          box-shadow: none;
        }
        .el-tabs__header {
          height: 40px;
          border: 1px solid #ececec;
          // width: 987px;
          background: #f8f8f8;
        }
        .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
          color: #35d2a5;
          border-right-color: #ececec;
          border-left-color: #ececec;
        }
        .el-tabs__content {
          padding: 0px;
          border-top: none;
          margin-top: 24px;
        }
        .el-tabs__item {
          font-size: 12px;
          width: 100px;
          height: 39px;
          line-height: 39px;
          color: #333333;
          text-align: center;
        }
        .is-top:hover {
          color: #35d2a5;
        }
        .con {
          width: 100%;
          overflow: hidden;
          padding: 2px;
          // .list{
          //   width: 236px;
          //   height:373px;
          //   border: 1px solid #ececec;
          //   float: left;
          //   margin:0px 12px 12px 0px;
          // }
          // & > .list:nth-child(4n) {
          //  margin-right: 0px;
          // }
        }
      }
    }
  }
  .el-tabs__nav {
    padding: 0px;
  }
  .el-tabs__item {
    font-size: 12px;
  }
}
</style>
