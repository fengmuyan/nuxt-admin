<template>
  <div class="BannerList">
    <div class="container">
      <div class="left">
        <ul>
          <li
            v-for="(item,index) in menu"
            :key="index"
            @mouseenter="typeEnter(item.typeList)"
            @mouseleave="typeLeave"
          >
            <div>
              {{item.name}}
              <i class="el-icon-arrow-right"></i>
            </div>
          </li>
        </ul>
      </div>
      <div class="mid">
        <el-carousel height="400px">
          <el-carousel-item v-for="(item,index) in bannerList" :key="index">
            <img v-lazy="item.src" alt>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item,index) in bannerRight" :key="index" class="clearfix">
            <img v-lazy="item.src" alt>
          </li>
        </ul>
      </div>
      <ul class="position" v-show="typeBox" @mouseenter="typeBox=true" @mouseleave="typeBox=false">
        <li v-for="(item,index) in typeBoxData" :key="index">
          <h5>{{item.typeName}}</h5>
          <ul>
            <li v-for="(v,i) in item.typeChild" :key="i">{{v.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BannerList",
  data() {
    return {
      bannerList: [
        { src: require("@/assets/imgs/homepage/banner_03.png") },
        { src: require("@/assets/imgs/homepage/banner_03.png") },
        { src: require("@/assets/imgs/homepage/banner_03.png") }
      ],
      bannerRight: [
        { src: require("@/assets/imgs/homepage/banner_r3.png") },
        { src: require("@/assets/imgs/homepage/banner_r2.png") },
        { src: require("@/assets/imgs/homepage/banner_r1.png") }
      ],
      typeBox: false,
      typeBoxData: []
    };
  },
  computed: {
    ...mapGetters(["menu"])
  },
  methods: {
    typeEnter(item) {
      this.typeBoxData = Object.assign([], item);
      if (!this.typeBox) {
        this.typeBox = true;
      }
    },
    typeLeave() {
      if (this.typeBox) {
        this.typeBox = false;
      }
    }
  }
};
</script>
<style lang="scss">
.BannerList {
  height: 400px;
  padding: 18px 0;
  .container {
    position: relative;
    & > div {
      float: left;
    }
    .left {
      width: 198px;
      border: 1px solid #cccccc;
      height: 384px;
      padding: 7px 0;
      background-color: #fff;
      ul > li {
        height: 40px;
        padding: 4px 0;
        cursor: pointer;
        div {
          padding: 0 23px 0 27px;
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          color: #333333;
          i {
            float: right;
            line-height: 40px;
          }
        }
        &:hover {
          div {
            background-color: #e7faf6;
            color: #45d6af;
            i {
              color: #45d6af;
            }
          }
        }
      }
    }
    .mid {
      width: 760px;
      height: 400px;
      margin: 0 10px;
    }
    .right {
      width: 220px;
      height: 400px;
      ul {
        li {
          img {
            float: left;
          }
        }
        li:nth-child(2) {
          margin: 10px 0 9px 0;
        }
      }
    }
    .position {
      position: absolute;
      width: 620px;
      height: 356px;
      border: 1px solid #cccccc;
      background-color: #fff;
      z-index: 500;
      left: 199px;
      padding-top: 42px;
      padding-left: 50px;
      box-shadow: 0 1px 5px rgb(200, 200, 200);
      & > li {
        width: 240px;
        min-height: 130px;
        float: left;
        margin-right: 57px;
        margin-bottom: 35px;
        h5 {
          font-size: 16px;
          color: #333333;
          height: 55px;
          line-height: 55px;
        }
        ul > li {
          line-height: 25px;
          font-size: 12px;
          margin-right: 18px;
          float: left;
          cursor: pointer;
          &:hover {
            color: #45d6af;
          }
        }
      }
    }
  }
}
</style>
