<template>
  <div class="shopInquiry">
    <div class="container">
      <div class="content">
        <div class="inner">
          <span class="positon">购物询价</span>
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="姓名：" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="推荐码：">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="项目地区：" prop="name" class="addressBox">
              <el-select v-model="ruleForm.provideId" placeholder="请选择" @change="provideChange">
                <el-option
                  v-for="item in provideArr"
                  :key="item.region_id"
                  :label="item.local_name"
                  :value="item.region_id"
                ></el-option>
              </el-select>
              <el-select v-model="ruleForm.cityId" placeholder="请选择">
                <el-option
                  v-for="item in cityArr"
                  :key="item.region_id"
                  :label="item.local_name"
                  :value="item.region_id"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="项目名称：" prop="name" class="projectName">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="需求描述：">
              <el-input type="textarea" v-model="ruleForm.desc" placeholder="(100-500个字)"></el-input>
            </el-form-item>
            <el-form-item label="需求图片：" class="uploadImg">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :limit="3"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-form-item>
            <div class="tip">
              （图片大小3MB以内，最多可上传3张。可上传设备清单照片或设计图纸等，
              以及可对需求加以说明的照片。）
            </div>
          </el-form>
          <div class="bot">
            <span class="botPosition">询价商品</span>
            <ul class="goodsList clearfix">
              <li class="clearfix">
                <div class="goodsImg">
                  <img src="@/assets/imgs/shopInquiry/goods.png" alt>
                </div>
                <div class="right">
                  <p>
                    Disney米奇缤纷乐园保鲜盒超值两件套
                    件套保鲜盒超值两
                  </p>
                  <p>规格参数：300mm×240mm×2010mm</p>
                  <p>×5</p>
                </div>
              </li>
              <li class="clearfix">
                <div class="goodsImg">
                  <img src="@/assets/imgs/shopInquiry/goods.png" alt>
                </div>
                <div class="right">
                  <p>
                    Disney米奇缤纷乐园保鲜盒超值两件套
                    件套保鲜盒超值两
                  </p>
                  <p>规格参数：300mm×240mm×2010mm</p>
                  <p>×5</p>
                </div>
              </li>
              <li class="clearfix">
                <div class="goodsImg">
                  <img src="@/assets/imgs/shopInquiry/goods.png" alt>
                </div>
                <div class="right">
                  <p>
                    Disney米奇缤纷乐园保鲜盒超值两件套
                    件套保鲜盒超值两
                  </p>
                  <p>规格参数：300mm×240mm×2010mm</p>
                  <p>×5</p>
                </div>
              </li>
              <li class="clearfix">
                <div class="goodsImg">
                  <img src="@/assets/imgs/shopInquiry/goods.png" alt>
                </div>
                <div class="right">
                  <p>
                    Disney米奇缤纷乐园保鲜盒超值两件套
                    件套保鲜盒超值两
                  </p>
                  <p>规格参数：300mm×240mm×2010mm</p>
                  <p>×5</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <el-button class="inqBtn">提交询价申请</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import City from "@/utils/city.js";
export default {
  name: "shopInquiry",
  data() {
    return {
      ruleForm: {
        name: "",
        desc: "",
        dialogImageUrl: "",
        provideId: "",
        cityId: ""
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      provideArr: [],
      cityArr: []
    };
  },
  mounted() {
    this.provideArr = City.provide;
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
    },
    provideChange() {
      this.ruleForm.cityId = "";
      this.cityArr = City.getCity(this.ruleForm.provideId);
    }
  }
};
</script>

<style lang="scss">
.shopInquiry {
  .container {
    height: 1605px;
    padding: 70px 0;
    .content {
      height: 1465px;
      padding: 100px 140px 80px 140px;
      background-color: #fff;
      text-align: center;
      .inner {
        height: 1162px;
        width: 920px;
        border: 1px solid #ccc;
        position: relative;
        .positon {
          display: inline-block;
          position: absolute;
          height: 50px;
          width: 120px;
          background-color: #fff;
          top: -25px;
          left: 86px;
          font-size: 21px;
          line-height: 50px;
          text-align: center;
        }
        .el-form {
          margin: 0 auto;
          width: 584px;
          margin-top: 78px;
          height: 505px;
          .el-form-item {
            margin-bottom: 23px;
          }
          .el-form-item__label {
            padding-right: 3px;
            font-size: 16px;
            color: #333333;
          }
          .el-input {
            text-align: left;
            .el-input__inner {
              width: 160px;
            }
          }
          .el-textarea__inner {
            width: 470px;
            border-radius: 0;
            min-height: 150px !important;
          }
          .uploadImg {
            overflow: hidden;
            .el-form-item__content {
              width: 480px;
              text-align: left;
              height: 150px;
            }
            .el-upload--picture-card {
              width: 150px;
              height: 150px;
              line-height: 150px;
              border-radius: 0;
              background-color: #f8f8f8;
              border: 1px solid #cccccc;
              margin-right: 0px;
            }
            .el-upload-list__item-actions,
            .is-success {
              border-radius: 0;
              width: 150px;
              height: 150px;
              margin-right: 10px;
            }
          }
          .tip {
            font-size: 14px;
            line-height: 24px;
            width: 480px;
            text-align: left;
            margin-left: 100px;
            color: #333333;
            margin-top: -8px;
          }
          .projectName {
            .el-input__inner {
              width: 336px;
            }
          }
          .addressBox {
            text-align: left;
            .el-select {
              margin-right: 10px;
            }
          }
        }
        .bot {
          width: 670px;
          padding-top: 58px;
          margin: 0 auto;
          margin-top: 275px;
          position: relative;
          border-top: 1px solid #ccc;
          .botPosition {
            display: inline-block;
            position: absolute;
            height: 30px;
            width: 100px;
            background-color: #fff;
            top: -15px;
            left: 285px;
            font-size: 16px;
            line-height: 30px;
            text-align: center;
          }
          li {
            width: 300px;
            margin-right: 70px;
            height: 70px;
            float: left;
            margin-bottom: 28px;
            .goodsImg {
              width: 70px;
              height: 70px;
              float: left;
              img {
                float: left;
              }
              margin-right: 13px;
            }
            .right {
              float: left;
              p {
                text-align: left;
                width: 216px;
                font-size: 12px;
                color: #999999;
              }
              p:first-child {
                line-height: 18px;
                color: #333333;
              }
              p:nth-child(2) {
                line-height: 20px;
              }
            }
          }
          li:nth-child(2),
          li:last-child {
            margin-right: 0;
          }
        }
      }
      .inqBtn {
        height: 45px;
        width: 200px;
        background-color: #14cfa0;
        color: #fff;
        display: inline-block;
        margin-top: 80px;
      }
    }
  }
}
</style>