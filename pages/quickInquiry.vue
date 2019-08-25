q<template>
  <div class="quickInquiry">
    <div class="top clearfix">
      <img src="@/assets/imgs/quickInquiry/top.png" alt>
    </div>
    <div class="container">
      <div class="content">
        <div class="inner">
          <span class="positon">项目询价</span>
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
        </div>
        <el-button class="inqBtn">提交询价申请</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "quickInquiry",
  data() {
    return {
      ruleForm: {
        name: "",
        desc: "",
        dialogImageUrl: ""
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
    }
  }
};
</script>

<style lang="scss">
.quickInquiry {
  .top {
    width: 100%;
    img {
      width: 100%;
      float: left;
    }
  }
  .container {
    height: 1105px;
    padding: 70px 0;
    .content {
      height: 965px;
      padding: 100px 140px 80px 140px;
      background-color: #fff;
      text-align: center;
      .inner {
        height: 660px;
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
        }
      }
      .inqBtn {
        height: 45px;
        line-height: 43px;
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