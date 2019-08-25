<template>
  <div class="FeedBack">
    <div class="OrderTop">账户设置</div>
    <div class="Feed">
      <div class="title">意见反馈</div>
      <div class="suggest">
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          class="demo-ruleForm"
        >
          <div class="one">
            <div class="top">请选择您要反馈的问题类型</div>
            <el-checkbox-group v-model="ruleForm.checkboxGroup6">
              <el-checkbox label="备选项1" border></el-checkbox>
              <el-checkbox label="备选项2" border></el-checkbox>
            </el-checkbox-group>
          </div>
          <div class="one">
            <div class="top">请描述您的问题，以便我们尽快为您处理</div>
              <el-form-item>
                <el-input type="textarea" v-model="ruleForm.desc" placeholder="10-500个字"></el-input>
              </el-form-item>
              <el-form-item class="uploadImg">
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
              <div class="tip">（图片大小3MB以内，最多可上传3张。可上传设备清单照片或设计图纸等，以及可对需求加以说明的照片。） </div>
          </div>
          <div class="one phone">
            <div class="top">请留下您的联系方式</div>
            <el-form-item label="联系人：">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="联系电话：">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </div>
        </el-form>
        <el-button class="el-button--success tijiao">提交反馈</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FeedBack",
  data() {
    return {
      ruleForm: {}
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
.FeedBack {
  .OrderTop {
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: white;
    padding: 0 20px;
    margin-bottom: 15px;
    font-size: 16px;
  }
  .Feed {
    background: white;
    width: 1005px;
    min-height: 600px;
    padding: 0px 24px 50px 24px;
    color: #333333;
    .title {
      height: 56px;
      line-height: 56px;
      border-bottom: 1px solid #ececec;
      font-size: 14px;
    }
    .suggest {
      .one {
        margin-top: 25px;
        .top {
          width: 955px;
          height: 40px;
          line-height: 40px;
          background: rgba(242, 250, 245, 1);
          font-size: 14px;
          padding: 0px 26px;
          color: #333333;
          margin-bottom: 30px;
        }
        .el-textarea__inner {
          width: 692px;
          height: 150px;
          border-radius: 0px;
        }
        .tip {
          font-size: 12px;
        }
        .el-upload--picture-card {
          border-radius: 0px;
        }
        .el-checkbox {
          width: 140px;
          height: 38px;
          text-align: center;
          border-radius: 0px;
          .el-checkbox__inner {
            margin-left: -11px;
            margin-top: 7px;
            background: none;
            border: none;
          }
          .el-checkbox__label {
            font-size: 12px;
          }
          .el-checkbox__input {
            cursor: pointer;
            outline: 0;
            position: absolute;
            bottom: 0;
            right: 0;
          }
          .is-checked {
            width: 0;
            height: 0;
            border-width: 0 0 20px 18px;
            border-style: solid;
            border-color: transparent transparent #14cfa0 transparent;
          }
        }
        .el-checkbox.is-bordered {
          border: 1px solid #cccccc;
        }
        .el-checkbox.is-checked {
          border: 1px solid #14cfa0;
        }
      }
      .phone {
        .el-input {
          width: 160px;
          .el-input__inner {
            width: 160px;
            height: 38px;
          }
        }
        .el-form-item__label {
          width: 100px;
        }
      }
      .tijiao {
        width: 200px;
        height: 45px;
        line-height: 45px;
        margin: 0 auto;
        margin-top: 50px;
      }
    }
  }
}
</style>
