<template>
  <div class="GoodsList">
    <ul class="container">
      <li>
        <div class="top clearfix">
          <h3 class="title">{{ProductFirst.title}}</h3>
          <ul class="tab clearfix">
            <li
              :class="{active:index==activeIndexo}"
              v-for="(item,index) in ProductFirst.listItem"
              :key="index"
              @click="ActiveClick(index)"
            >{{item}}</li>
          </ul>
          <nuxt-link to="/shopping">
            <span class="more">
              更多
              <i class="el-icon-circle-plus-outline"></i>
            </span>
          </nuxt-link>
        </div>
        <div class="content">
          <goods-item
            v-for="(item,index) in ProductFirst.productList"
            :key="index"
            :dataItem="item"
            :class="{goodsItem:true,last:(index+1)%5===0}"
          ></goods-item>
        </div>
      </li>
      <li>
        <div class="top clearfix">
          <h3 class="title">{{ProductSecond.title}}</h3>
          <ul class="tab clearfix">
            <li
              :class="{active:index==activeIndext}"
              v-for="(item,index) in ProductSecond.listItem"
              :key="index"
              @click="ActiveClickone(index)"
            >{{item}}</li>
          </ul>
          <nuxt-link to="/shopping">
            <span class="more">
              更多
              <i class="el-icon-circle-plus-outline"></i>
            </span>
          </nuxt-link>
        </div>
        <div class="content">
          <goods-item
            v-for="(item,index) in ProductSecond.productList"
            :key="index"
            :dataItem="item"
            :class="{goodsItem:true,last:(index+1)%5===0}"
          ></goods-item>
        </div>
      </li>
      <li>
        <div class="top clearfix">
          <h3 class="title">{{ProductThree.title}}</h3>
          <ul class="tab clearfix">
            <li
              :class="{active:index==activeIndexth}"
              v-for="(item,index) in ProductThree.listItem"
              :key="index"
              @click="ActiveClicktwo(index)"
            >{{item}}</li>
          </ul>
          <nuxt-link to="/shopping">
            <span class="more">
              更多
              <i class="el-icon-circle-plus-outline"></i>
            </span>
          </nuxt-link>
        </div>
        <div class="content">
          <goods-item
            v-for="(item,index) in ProductThree.productList"
            :key="index"
            :dataItem="item"
            :class="{goodsItem:true,last:(index+1)%5===0}"
          ></goods-item>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import GoodsItem from "@/components/index/GoodsItem";
export default {
  name: "GoodsList",
  components: {
    GoodsItem
  },
  data() {
    return {
      ProductFirst: {
        productList: [
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          }
        ],
        listItem: [
          "多联室外机",
          "风冷离心机",
          "风冷离心机",
          "风冷离心机",
          "风冷离心机"
        ],
        title: "空调主机"
      },
      ProductSecond: {
        productList: [
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          }
        ],
        listItem: ["新风机组", "新风分类2", "水冷离心机", "水源热泵"],
        title: "新风系统"
      },
      ProductThree: {
        productList: [
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          },
          {
            img: require("@/assets/imgs/homepage/goods.png"),
            name: "富安纳里咖啡小镇床单舒适四件套(1.5m*2.0m)"
          }
        ],
        listItem: ["空气净化器", "水源净化", "空调净化"],
        title: "净化类产品"
      },
      activeIndexo: "",
      activeIndext: "",
      activeIndexth: ""
    };
  },
  methods: {
    ActiveClick(index) {
      this.activeIndexo = index;
    },
    ActiveClickone(index) {
      this.activeIndext = index;
    },
    ActiveClicktwo(index) {
      this.activeIndexth = index;
    }
  }
};
</script>
<style lang="scss">
.GoodsList {
  height: 2480px;
  padding: 40px 0;
  .container {
    & > li {
      height: 800px;
      margin-bottom: 40px;
      .top {
        height: 40px;
        .title {
          line-height: 40px;
          font-size: 22px;
          color: black;
          width: 150px;
          float: left;
        }
        .tab {
          float: left;
          & > li {
            height: 25px;
            line-height: 25px;
            font-size: 16px;
            color: black;
            margin-right: 38px;
            float: left;
            border-bottom: 2px solid #f8f8f8;
            margin-top: 13px;
            cursor: pointer;
          }
          .active {
            border-color: #14d0a0;
            color: #14d0a0;
          }
        }
        .more {
          float: right;
          font-size: 16px;
          height: 25px;
          line-height: 25px;
          border-bottom: 2px solid #f8f8f8;
          margin-top: 13px;
          color: black;
          cursor: pointer;
          i {
            font-size: 17px;
          }
          &:hover {
            color: #14d0a0;
            i {
              color: #14d0a0;
            }
          }
        }
      }
      .content {
        margin-top: 11.5px;
        .goodsItem {
          width: 230px;
          height: 360px;
          background-color: #ffffff;
          float: left;
          margin-right: 12.5px;
          margin-top: 12.5px;
        }
        .last {
          margin-right: 0;
        }
      }
    }
    & > li:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
