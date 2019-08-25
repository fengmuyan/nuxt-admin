<template>
  <div class="shopdetail">
    <div class="breadcrum">
      <div class="container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>产品中心</el-breadcrumb-item>
          <el-breadcrumb-item>{{guiData.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="product-intro">
      <div class="container proContent">
        <!-- 图片部分 -->
        <div class="proTop clearfix">
          <div class="preview-wrap">
            <div class="main-img">
              <img :src="imgSrc" alt>
            </div>
            <div class="spec-list">
              <ul class="clearfix">
                <li
                  v-for="(item,index) in detail_img"
                  :key="index"
                  @click="Imgclick(item,index)"
                  :class="actIndex==index?'active':''"
                >
                  <img :src="item" alt>
                </li>
              </ul>
            </div>
          </div>
          <div class="itemInfo-wrap">
            <div class="sku-name">日立RAS-35HN8R新型单元机室外机日立新型单元机室外机新型单元机室外机</div>
            <div class="activited clearfix">
              <div class="design">活动</div>
              <div class="designCont">
                <p>
                  <span class="plus">满减</span>
                  <span class="plustext">满5000元，减300元</span>
                </p>
                <p>
                  <span class="plus">兑换</span>
                  <span class="plustext">积分商城好礼兑换</span>
                </p>
              </div>
            </div>
            <div class="activited">
              <div class="clearfix brand">
                <div class="design">品牌</div>
                <div class="brandname">日立</div>
              </div>
              <div class="clearfix brand">
                <div class="design">型号</div>
                <div class="brandname">CXW-236-D7</div>
              </div>
            </div>
            <div class="activited gouwu">
              <div class="standard clearfix">
                <div class="design">规格</div>
                <ul class="change">
                  <li
                    v-for="(i,index) in guiData.tyeplist"
                    :key="index"
                    @click="typeClick(index)"
                    :class="typeIndex==index?'active':'item-list'"
                  >{{i}}</li>
                </ul>
              </div>
              <div class="standard clearfix">
                <div class="design">数量</div>
                <div class="change">
                  <el-input-number v-model="guiData.num" @change="handleChange" :min="1" :max="10"></el-input-number>
                  <span>库存{{guiData.allNum}}件</span>
                </div>
              </div>
            </div>
            <div class="cart clearfix">
              <el-button class="el-button--success" @click="AddShop">加入购物车</el-button>
              <el-button @click="inQuiry">立即询价</el-button>
            </div>
          </div>
          <div class="track">
            <div class="posit">用户还关注</div>
            <div class="cursous" ref="element">
              <ul class="shangpin" ref="topInfo">
                <li class="curImg" v-for="(item,index) in followData" :key="index">
                  <a>
                    <div class="pic">
                      <img v-lazy="item.img" alt>
                    </div>
                    <div class="tex">{{item.name}}</div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="bottom">
              <i class="el-icon-arrow-up" @click="UpdownSlide(1)"></i>
              <i class="el-icon-arrow-down" @click="UpdownSlide(-1)"></i>
            </div>
          </div>
        </div>
        <!-- 详情部分 -->
        <div class="proBot clearfix">
          <!-- 商品列表 -->
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
            <el-tabs type="border-card">
              <el-tab-pane label="商品描述">
                <div class="con">
                  <div class="base">
                    <p>基本参数</p>
                    <div class="baselist clearfix">
                      <ul>
                        <li>
                          <span>商品名称：</span>
                          <span>格力RFC125MXSAVA</span>
                        </li>
                        <li>
                          <span>产地：</span>
                          <span>中国在陆</span>
                        </li>
                        <li>
                          <span>产品特色：</span>
                          <span>WIFI智能，静音，超薄</span>
                        </li>
                        <li>
                          <span>品牌：</span>
                          <span>格力</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>商品名称：</span>
                          <span>格力RFC125MXSAVA</span>
                        </li>
                        <li>
                          <span>产地：</span>
                          <span>中国在陆</span>
                        </li>
                        <li>
                          <span>产品特色：</span>
                          <span>WIFI智能，静音，超薄</span>
                        </li>
                        <li>
                          <span>品牌：</span>
                          <span>格力</span>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <span>商品名称：</span>
                          <span>格力RFC125MXSAVA</span>
                        </li>
                        <li>
                          <span>产地：</span>
                          <span>中国在陆</span>
                        </li>
                        <li>
                          <span>产品特色：</span>
                          <span>WIFI智能，静音，超薄</span>
                        </li>
                        <li>
                          <span>品牌：</span>
                          <span>格力</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="con basedetail">
                  <div class="stroduce">
                    <p>简介：</p>
                    <div class="strocon">
                      风机盘管机组是用于外供冷水、热水由风机和盘管组成的机组，对房间直接送风，具有供冷、供热或分别供冷和供热功能。风机盘管机组是用于外供冷
                      水、热水由风机和盘管组成的机组，对房间直接送风，具有供冷、供热或分别供冷和供热功能.
                    </div>
                  </div>
                  <div class="stroduce">
                    <p>适用场所：</p>
                    <div class="strocon">适用于宾馆客房、办公室，商业建筑等众多场合。</div>
                  </div>
                  <div class="stroduce">
                    <p>特点：</p>
                    <div class="strocon">产品风量、种类、静压等有多种形式可选，可满足不同场合的设计选用。</div>
                  </div>
                </div>
                <div class="con">
                  <img src="@/assets/imgs/shopping/shopdetail.png" alt>
                  <img src="@/assets/imgs/shopping/detail2.png" alt>
                </div>
              </el-tab-pane>
              <el-tab-pane label="规格参数">
                <div class="con"></div>
              </el-tab-pane>
              <el-tab-pane label="售后服务">
                <div class="con"></div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num8: 1,
      // 推荐商品
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
      // 详情图片
      imgSrc: "",
      detail_img: [
        require("@/assets/imgs/shopping/detail.png"),
        require("@/assets/imgs/shopping/detail1.png"),
        require("@/assets/imgs/shopping/detail.png"),
        require("@/assets/imgs/shopping/detail.png"),
        require("@/assets/imgs/shopping/detail.png")
      ],
      actIndex: 0,
      // 规格数据
      guiData: {
        title:
          "日立RAS-35HN8R新型单元机室外机日立新型单元机室外机新型单元机室外机",
        brand: "日立",
        name: "新型单元机室外机",
        type: "CXW-236-D7",
        tyeplist: [
          "2匹冷暖 220V",
          "2匹冷暖 220V",
          "2匹冷暖 220V",
          "2匹冷暖 220V",
          "2匹冷暖 220V"
        ],
        num: 3,
        allNum: 20
      },
      // 关注数据
      followData: [
        {
          name: "日立新型单元机室外机日",
          img: require("@/assets/imgs/shopping/you.png")
        },
        {
          name: "日立新型单元机室外机日",
          img: require("@/assets/imgs/shopping/shopping2.png")
        },
        {
          name: "日立新型单元机室外机日",
          img: require("@/assets/imgs/shopping/shopping3.png")
        },
        {
          name: "日立新型单元机室外机日",
          img: require("@/assets/imgs/shopping/shopping2.png")
        },
        {
          name: "日立新型单元机室外机日",
          img: require("@/assets/imgs/shopping/shopping2.png")
        },
        {
          name: "日立新型单元机室外机日",
          img: require("@/assets/imgs/shopping/shopping3.png")
        },
        {
          name: "日立新型单元机室外机日",
          img: require("@/assets/imgs/shopping/you.png")
        },
        {
          name: "日立新型单元机室外机日",
          img: require("@/assets/imgs/shopping/shopping2.png")
        }
      ],
      typeIndex: 0,
      top: 0,
      height: 0,
      domheight: 0
    };
  },
  created() {
    this.shopInit();
  },
  mounted: function() {
    this.$nextTick(() => {
      this.height = this.$refs.element.offsetHeight;
      this.domheight = this.$refs.topInfo.offsetHeight;
      this.top = -this.height;
    });
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    shopInit() {
      this.imgSrc = this.detail_img[0];
    },
    Imgclick(item, index) {
      this.imgSrc = item;
      this.actIndex = index;
    },
    typeClick(index) {
      this.typeIndex = index;
    },
    AddShop() {
      this.$router.push({ path: "/shoppingCart" });
    },
    inQuiry() {
      this.$router.push({ path: "/quickInquiry" });
    },
    // 右侧滚动事件触发
    UpdownSlide(i) {
      let bei = Math.ceil(this.domheight / this.height);
      if (this.top > 0) {
        this.top = -(bei - 1) * this.height;
      } else if (this.top < -(bei - 1) * this.height) {
        this.top = 0;
      }
      this.$refs.topInfo.style.transform = "translateY(" + this.top + "px)";
      if (i === 1) {
        this.top = this.top - this.height;
      } else {
        this.top = this.top + this.height;
      }
    }
  }
};
</script>

<style lang="scss">
.shopdetail {
  .breadcrum {
    height: 40px;
    line-height: 40px;
    background: #f7f8f8;
    .el-breadcrumb {
      font-size: 12px;
      line-height: 1;
      height: 40px;
      line-height: 40px;
      color: #666666;
    }
  }
  .product-intro {
    background: white;
    .proContent {
      padding: 30px 0px;
      .proTop {
        margin-bottom: 14px;
        .preview-wrap {
          width: 400px;
          float: left;
          .main-img {
            width: 400px;
            height: 400px;
            img {
              width: 100%;
              display: block;
            }
          }
          .spec-list {
            padding: 20px 0px;
            width: 100%;
            ul {
              li {
                width: 72px;
                height: 72px;
                margin-right: 10px;
                float: left;
                img {
                  width: 100%;
                  display: block;
                }
              }
              & > li:last-child {
                margin-right: 0;
              }
            }
          }
        }
        .itemInfo-wrap {
          width: 600px;
          padding: 0 40px;
          height: 600px;
          float: left;
          .sku-name {
            height: 64px;
            line-height: 22px;
            font-size: 20px;
            font-weight: bold;
            padding-bottom: 19px;
            color: #333333;
            border-bottom: 1px solid rgba(236, 236, 236, 1);
          }
          .activited {
            padding: 18px 0px;
            border-bottom: 1px solid rgba(236, 236, 236, 1);
            .design {
              font-size: 12px;
              color: #999999;
              width: 70px;
              float: left;
            }
            .designCont {
              height: 54px;
              float: left;
              & > p:first-child {
                margin-bottom: 10px;
              }
              .plus {
                width: 36px;
                height: 22px;
                text-align: center;
                line-height: 20px;
                color: #ff0000;
                font-size: 12px;
                display: inline-block;
                background: rgba(255, 255, 255, 1);
                border: 1px solid #ff0000;
                margin-right: 10px;
              }
              .plustext {
                font-size: 12px;
                color: #333333;
              }
            }
            .brand {
              // height: 38px;
              // line-height: 38px;
              .brandname {
                font-size: 12px;
                color: #666666;
              }
            }
            & > .brand:first-child {
              margin-bottom: 26px;
            }
            .standard {
              margin-bottom: 26px;
              .change {
                width: 450px;
                float: left;
                span {
                  font-size: 12px;
                  color: #999999;
                  margin-left: 18px;
                  display: inline-block;
                }
                li {
                  width: 120px;
                  height: 40px;
                  line-height: 40px;
                  text-align: center;
                  font-size: 12px;
                  color: #333333;
                  float: left;
                  margin-right: 12px;
                  margin-bottom: 8px;
                  &:hover {
                    cursor: pointer;
                  }
                }
                .item-list {
                  border: 1px solid #cccccc;
                }
                .el-input-number--medium {
                  height: 50px;
                  width: 95px;
                  border: 1px solid #cccccc;
                }
                .el-input--medium .el-input__inner {
                  width: 70px;
                  height: 48px;
                  line-height: 48px;
                  padding: 0px;
                  border: none;
                }
                .el-input-number .el-input-number__decrease {
                  right: 0px;
                  bottom: 0px;
                  top: auto;
                  left: auto;
                  border-right: none;
                  border-left: 1px solid #dcdfe6;
                  border-radius: 0 0 4px;
                  width: 25px;
                  height: 25px;
                  line-height: 25px;
                  font-size: 14px;
                }
                .el-input-number .el-input-number__increase {
                  right: 0px;
                  bottom: 0px;
                  border-radius: 0 4px 0 0;
                  border-bottom: 1px solid #dcdfe6;
                  width: 25px;
                  height: 25px;
                  line-height: 25px;
                  font-size: 14px;
                }
              }
            }
          }
          .gouwu {
            border-bottom: none;
          }
          .cart {
            text-align: center;
            .el-button {
              width: 160px;
              height: 45px;
              font-size: 16px;
              display: inline-block;
            }
            & > .el-button:first-child {
              margin-right: 12px;
            }
          }
        }
        .track {
          width: 200px;
          height: 600px;
          float: left;
          border: 1px solid #ececec;
          text-align: center;
          position: relative;
          .posit {
            font-size: 16px;
            height: 53px;
            line-height: 53px;
            color: #333333;
          }
          .cursous {
            padding: 0px 20px;
            height: 513px;
            overflow: hidden;
            position: relative;
            ul {
              position: absolute;
              left: 0;
              width: 100%;
            }
            .curImg {
              .pic {
                width: 130px;
                height: 130px;
                margin: 0 auto;
                img {
                  max-width: 100%;
                  max-height: 100%;
                }
              }
              .tex {
                height: 41px;
                line-height: 41px;
                font-size: 12px;
                color: #333333;
              }
            }
          }
          .bottom {
            width: 100%;
            height: 34px;
            line-height: 34px;
            position: absolute;
            bottom: 0;
            i {
              width: 30px;
              height: 14px;
              line-height: 14px;
              font-size: 26px;
              color: #cccccc;
            }
          }
        }
      }
      .proBot {
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
                max-height: 100%;
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
            box-shadow: none;
            border: none;
          }
          .el-tabs__header {
            height: 45px;
            border: 1px solid #ececec;
            background: #f7f8f8;
          }
          .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
            color: #14cfa0;
            border-right-color: #ececec;
            border-left-color: #ececec;
            border-top: 2px solid #14cfa0;
          }
          .el-tabs__content {
            padding: 0px;
            border: 1px solid #ececec;
            border-top: none;
          }
          .el-tabs__nav {
            padding: 0px;
          }
          .el-tabs__item {
            font-size: 12px;
            width: 100px;
            height: 44px;
            line-height: 44px;
            color: #333333;
          }
          .is-top:hover {
            color: #14cfa0;
          }
          .con {
            width: 100%;
            overflow: hidden;
            .base {
              padding: 30px 74px;
              border-bottom: 1px solid #ececec;
              p {
                font-size: 12px;
                margin-bottom: 28px;
              }
              ul {
                width: 182px;
                height: 85px;
                font-size: 12px;
                color: #333333;
                line-height: 21px;
                float: left;
                margin-right: 97px;
                li {
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                }
              }
            }
          }
          .basedetail {
            padding: 30px 26px;
            .stroduce {
              margin-bottom: 15px;
              p {
                line-height: 30px;
              }
            }
          }
        }
      }
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px rgb(20, 208, 160);
  }
  .shangpin {
    transition: all 0.25s ease-in;
    -moz-transition: all 0.25s ease-in;
    -webkit-transition: all 0.25s ease-in;
  }
}
</style>
